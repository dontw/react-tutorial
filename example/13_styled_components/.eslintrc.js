module.exports = {
  extends: ['airbnb'],
  env: {
    browser: true,
  },
  globals:{
  },
  parser: 'babel-eslint',
  rules: {
    'jsx-a11y/anchor-is-valid': 0,
    'react/jsx-filename-extension': 0,
    'no-param-reassign': ["error", { "props": false }],
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
  },
};