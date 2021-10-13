const path = require('path');

module.exports = {
  css: { extract: false },

  productionSourceMap: false,

  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false,
    },
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, './src'),
        '@img': path.join(__dirname, './src/assets/img'),
        '@scss': path.join(__dirname, './src/assets/scss'),
        '@components': path.join(__dirname, './src/components'),
        '@directives': path.join(__dirname, './src/directives'),
        '@filters': path.join(__dirname, './src/filters'),
        '@validators': path.join(__dirname, './src/validators'),
      },
    },
  },

  chainWebpack: (config) => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap((options) => Object.assign(options, { limit: Infinity }));

    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();

    svgRule.use('vue-svg-loader').loader('vue-svg-loader');
  },
};
