module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    plugins: ['@typescript-eslint', 'react'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
    ],
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // Add your rules here
    },
    overrides: [
      {
        files: ['*.ts', '*.tsx'],
        rules: {
          // TypeScript-specific rules (if any)
        },
      },
    ],
  };
  