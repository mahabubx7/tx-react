import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const reactConfig = {
  files: ['src/client/**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  plugins: {
    react: pluginReact,
  },
};

const expressConfig = {
  files: ['src/**/*.{js,mjs,cjs,ts}', '!src/client/**/*'],
  plugins: {
    // Remove the duplicate definition of "@typescript-eslint" plugin
  },
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};

const configs = [
  {
    ignores: ['node_modules', 'dist', './src/routes.ts', './src/swagger.json'],
  },
  reactConfig,
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  expressConfig,
];

export default configs;
