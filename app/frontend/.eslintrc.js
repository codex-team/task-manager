module.exports = {
  extends: [
    'codex/ts',
    'react-app',
    'react-app/jest',
  ],
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
