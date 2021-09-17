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
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();

    svgRule
      .test(/\.svg$/)
      .use('svg-url-loader')
      .loader('svg-url-loader');
  },
};
