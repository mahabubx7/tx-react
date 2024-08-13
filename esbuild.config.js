import * as esbuild from 'esbuild';

// esbuild custom command flags
const flags = ['--dev', '--prod'];

// check flags and set mode
const args = process.argv.slice(2);
if (!args || args.length === 0) {
  console.log('Error: No flags provided!');
  process.exit(1);
}
const mode = () => {
  if (flags.includes(args[0])) {
    return args[0] === '--dev' ? 'development' : 'production';
  }
  console.log('Error: Invalid flag provided!');
  process.exit(1);
};

const m = mode();
let ctx; // esbuild context

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

    await ctx.watch();
    console.log('Watching for changes...');
  } catch (error) {
    console.error('An error occurred:', error);
    process.exit(1);
  }
}

// esbuild config for => PRODUCTION
async function esbuildForProd() {
  try {
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

    console.log('Building for production... Done!');
  } catch (error) {
    console.error('An error occurred:', error);
    process.exit(1);
  }
}

if (m === 'development') {
  await esbuildForDev();
} else if (m === 'production') {
  await esbuildForProd();
} else {
  console.log('Error: Invalid mode provided!');
  process.exit(1);
}
