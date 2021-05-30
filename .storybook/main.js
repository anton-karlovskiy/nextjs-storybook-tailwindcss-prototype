
const path = require('path');

module.exports = {
  // TODO: could be more efficient
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    // Add everything below here
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    }
  ],
  webpackFinal: config => {
    // MEMO: inspired by https://github.com/storybookjs/storybook/issues/11639
    config.resolve.modules = [
      path.resolve(__dirname, '..'),
      'node_modules'
    ];

    // TODO: should follow https://storybook.js.org/docs/react/workflows/faq#how-do-i-setup-storybook-to-share-webpack-configuration-with-nextjs
    // MEMO: inspired by https://github.com/storybookjs/storybook/issues/9070#issuecomment-635895868
    const fileLoaderRule = config.module.rules.find(
      rule => rule.test?.test('.svg')
    );
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      enforce: 'pre',
      use: ['@svgr/webpack']
    });

    return config;
  }
};
