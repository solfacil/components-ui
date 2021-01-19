const babelOptions = {
  presets: ['@babel/preset-env'],
  plugins: ['require-context-hook', '@babel/plugin-proposal-class-properties'],
};

module.exports = require('babel-jest').createTransformer(babelOptions);
