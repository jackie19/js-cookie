module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  extends: ['airbnb-base/legacy'],
  plugins: ['prettier'],
  // Add your custom rules here
  rules: {
    'no-debugger': 'error',
    'prettier/prettier': 'error',
    'comma-dangle': 'off',
    semi: 'off',
  },
}
