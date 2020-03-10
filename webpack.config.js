const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
      '@babel/polyfill',
      './src/app/index.js'
    ],
    output: {
      path: __dirname + '/src/views/js',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          use: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
          template: './src/views/index.html'
      }),
  ]
  };