module.exports = {
  extends: 'airbnb-base',
  env: {
    browser: true,
    node: true,
  },
  globals: {},
  rules: {
    'max-len': [
      'error', {
        code: 80,
      }
    ]
  }
};