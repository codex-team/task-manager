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
};
