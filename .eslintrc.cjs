/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution',);

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    quotes: ['error', 'single',],
    semi: ['error', 'always',],
    'comma-dangle': ['error', 'always',],
  },
};
