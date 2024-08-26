module.exports = {
  env: {
    browser: true, // Adds browser global variables like 'window', 'document'
    node: true, // Adds Node.js global variables and Node.js scoping
    es2021: true, // Adds all ECMAScript 2021 globals and automatically sets the ecmaVersion parser option to 12
  },
  rules: {
    'no-mixed-operators': 'off',
    'no-sequences': 'off',
    'no-unused-expressions': 'off',
    'react/prop-types': 'off',
    'react/no-unknown-property': ['error', { ignore: ['itemscope', 'itemtype', 'itemprop'] }],
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};