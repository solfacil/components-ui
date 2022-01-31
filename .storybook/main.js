const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  staticDirs: ['../public'],


  "framework": "@storybook/vue3",

  webpackFinal: async (config) => {

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.dirname(path.resolve(__dirname, '../src')),
      '@img': path.resolve(__dirname, '../src/assets/img'),
      '@scss': path.resolve(__dirname, '../src/assets/scss'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@directives': path.resolve(__dirname, '../src/directives'),
      '@filters': path.resolve(__dirname, '../src/filters'),
      '@validators': path.join(__dirname, './src/validators'),
      '~': path.resolve(__dirname, '../node_modules'),
    }

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    })
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
        },
      ],
      include: path.resolve(__dirname, '../src'),
    })



    /** Following code is from a very specific topic on stackoverflow about loading svg on vue with storybook
     * src: https://stackoverflow.com/questions/56971513/storybook-does-not-load-svgs-in-components-of-vue-project
     */
    // let rule = config.module.rules.find(r =>
    //   // it can be another rule with file loader
    //   // we should get only svg related
    //   r.test && r.test.toString().includes('svg') &&
    //   // file-loader might be resolved to js file path so "endsWith" is not reliable enough
    //   r.loader && r.loader.includes('file-loader')
    // )
    // rule.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/

    // config.module.rules.push(
    //   {
    //     test: /\.svg$/,
    //     oneOf: [
    //       {
    //         resourceQuery: /url/,
    //         loader: 'svg-url-loader'
    //       },
    //       // {
    //       //   resourceQuery: /component/,
    //       //   loader: 'vue-svg-loader'
    //       // },
    //       // {
    //       //   loader: 'vue-svg-loader'
    //       // }
    //     ]
    //   }
    // )

    // config.module.rules.push({
    //   test: /\.(png|jpg|gif|svg)$/,
    //   use: ['file-loader', 'url-loader', 'svg-url-loader'],
    //   include: path.resolve(__dirname, '../'),
    // });

    // config.module.rules.push({
    //   test: /\.svg$/,
    //   use: [
    //     {
    //       loader: 'svg-url-loader',
    //     },
    //     {
    //       loader: 'svg-url-loader',
    //       // options: {
    //       //   jsx: true,
    //       // },
    //     },
    //   ],
    //   include: path.resolve(__dirname, '../'),
    // });

    return config
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss',
  ],
}
