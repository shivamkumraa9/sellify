/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint-config-airbnb-base',
    'eslint:recommended',
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
  rules: {
    'vue/multi-word-component-names': 'off',
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
};
