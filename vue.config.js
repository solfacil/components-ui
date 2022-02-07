const path = require('path');
const projectRootDir = path.resolve(__dirname);

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
        '@': path.resolve(projectRootDir, 'src'),
        '@img': path.resolve(projectRootDir, './src/assets/img'),
        '@scss': path.resolve(projectRootDir, './src/assets/scss'),
        '@components': path.resolve(projectRootDir, './src/components'),
        '@directives': path.resolve(projectRootDir, './src/directives'),
        '@filters': path.resolve(projectRootDir, './src/filters'),
        '@validators': path.resolve(projectRootDir, './src/validators'),
        '@mixins': path.resolve(projectRootDir, './src/mixins'),
      },
    },
  },

  chainWebpack: (config) => {
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
