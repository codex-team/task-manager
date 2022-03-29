const path = require('path');

module.exports = {
  "stories": [
    {
      directory: '../src/components/UI',
      files: '**/*.stories.*',
      titlePrefix: 'UI'
    },
    {
      directory: '../src/components/layouts',
      files: '**/*.stories.*',
      titlePrefix: 'Layout'
    },
    {
      directory: '../src/components/views',
      files: '**/*.stories.*',
      titlePrefix: 'View'
    },
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'components': path.resolve(__dirname, "../src/components"),
    };

    return config;
  }
}
