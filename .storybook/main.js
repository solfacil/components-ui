const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss',
  ],

  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/': path.dirname(path.resolve(__dirname, '../src')),
      '@img': path.resolve(__dirname, '../src/assets/img'),
      '@scss': path.resolve(__dirname, '../src/assets/scss'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@directives': path.resolve(__dirname, '../src/directives'),
      '@filters': path.resolve(__dirname, '../src/filters'),
      '@validators': path.join(__dirname, './src/validators'),
      '~': path.resolve(__dirname, '../node_modules'),
    };

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // config.module.rules.push({
    //   test: /\.(png|jpg|gif|svg)$/,
    //   use: ['file-loader', 'url-loader', 'svg-url-loader'],
    //   include: path.resolve(__dirname, '../'),
    // });

    // // config.module.rules.push({
    // //   test: /\.svg$/,
    // //   use: [
    // //     {
    // //       loader: 'svg-url-loader',
    // //     },
    // //     {
    // //       loader: 'svg-url-loader',
    // //       // options: {
    // //       //   jsx: true,
    // //       // },
    // //     },
    // //   ],
    // //   include: path.resolve(__dirname, '../'),
    // // });

    return config;
  },
};
