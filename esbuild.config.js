import * as esbuild from 'esbuild';
import { exec } from 'node:child_process';

// esbuild custom command flags
const flags = ['--dev', '--prod'];

// check flags and set mode
const args = process.argv.slice(2);
if (!args || args.length === 0) {
  console.log('❌ Error: No flags provided!');
  process.exit(1);
}

const mode = () => {
  if (flags.includes(args[0])) {
    return args[0] === '--dev' ? 'development' : 'production';
  }
  console.log('❌ Error: Invalid flag provided!');
  process.exit(1);
};

const m = mode();
let ctx; // esbuild context for Server only
let clientCtx; // esbuild context for Client only

// esbuild config for => DEVELOPMENT
async function esbuildForDev() {
  try {
    ctx = await esbuild.context({
      entryPoints: ['./src/main.ts'],
      bundle: true,
      sourcemap: true,
      minify: false,
      platform: 'node',
      target: ['es2022'],
      format: 'esm',
      packages: 'external',
      define: {
        'process.env.NODE_ENV': "'development'",
      },
      outdir: 'dist',
    });

    // client: react app
    exec(
      'mkdir -p dist/client && cp ./src/client/index.html ./dist/client/index.html && cp -r ./src/client/assets/* ./dist/client',
      (err, _stdout, _stderr) => {
        if (err) {
          console.error('❌ An error occurred:', err);
          process.exit(1);
        }
        console.log('✅ index.html & assets are copied to dist/client');
      },
    );

    // client: react app
    clientCtx = await esbuild.context({
      entryPoints: ['./src/client/index.tsx'],
      bundle: true,
      sourcemap: true,
      minify: false,
      // splitting: true,
      platform: 'browser',
      target: ['es2022'],
      format: 'esm',
      metafile: true,
      define: {
        'process.env.NODE_ENV': JSON.stringify('development'),
        'process.browser': 'true',
      },
      // outdir: 'dist/client',
      outfile: 'dist/client/bundle.js',
    });

    await ctx.watch();
    console.log('[server] 👀 Watching for changes...');
    await clientCtx.watch();
    console.log('[client] 👀 Watching for changes...');
  } catch (error) {
    console.error('❌ An error occurred:', error);
    process.exit(1);
  }
}

// esbuild config for => PRODUCTION
async function esbuildForProd() {
  try {
    console.log('⏳ Building for production ...');
    ctx = await esbuild.build({
      entryPoints: ['./src/main.ts'],
      bundle: true,
      sourcemap: true,
      minify: true,
      platform: 'node',
      target: ['es2022'],
      format: 'esm',
      packages: 'external',
      define: {
        'process.env.NODE_ENV': "'production'",
      },
      outdir: 'dist',
    });

    // client: react app
    exec(
      'mkdir -p dist/client && cp ./src/client/index.html ./dist/client/index.html && cp -r ./src/client/assets/* ./dist/client',
      (err, _stdout, _stderr) => {
        if (err) {
          console.error('❌ An error occurred:', err);
          process.exit(1);
        }
        console.log('✅ index.html & assets are copied to dist/client');
      },
    );

    clientCtx = await esbuild.build({
      entryPoints: ['./src/client/index.tsx'],
      bundle: true,
      sourcemap: true,
      minify: true,
      platform: 'browser',
      // splitting: true,
      target: ['es2022'],
      format: 'esm',
      metafile: true,
      define: {
        'process.env.NODE_ENV': JSON.stringify('production'),
        'process.browser': 'true',
      },
      // outdir: 'dist/client',
      outfile: 'dist/client/bundle.js',
    });

    console.log('✅ Build completed!');
  } catch (error) {
    console.error('❌ An error occurred:', error);
    process.exit(1);
  }
}

if (m === 'development') {
  await esbuildForDev();
} else if (m === 'production') {
  await esbuildForProd();
  // process.exit(0);
} else {
  console.log('❌ Error: Invalid mode provided!');
  process.exit(1);
}
