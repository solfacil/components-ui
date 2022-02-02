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
        '@mixins': path.join(__dirname, './src/mixins'),
      },
    },
  },

  chainWebpack: (config) => {
    config.resolve.alias.set('vue', '@vue/compat');

    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => ({
        ...options,
        compilerOptions: {
          compilerOptions: {
            MODE: 2,
          },
        },
      }));

    // config.module
    //   .rule('images')
    //   .use('url-loader')
    //   .loader('url-loader')
    //   .tap((options) => Object.assign(options, { limit: Infinity }));
  },
};
