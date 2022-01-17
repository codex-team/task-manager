module.exports = {
  extends: [
    'codex/ts',
    'react-app',
    'react-app/jest',
    'plugin:effector/recommended',
    'plugin:effector/scope',
  ],
  plugins: [ 'effector' ],
  overrides: [
    {
      'files': [
        '**/*.stories.*',
      ],
      'rules': {
        'import/no-anonymous-default-export': 'off',
      },
    },
  ],
  rules: {
    'key-spacing': ['error', { 'beforeColon': false } ],
    'space-in-parens': [2, 'never'],
    'react/jsx-curly-spacing': [2, 'never'],
  },
};
