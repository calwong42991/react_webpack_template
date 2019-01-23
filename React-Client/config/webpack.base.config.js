const path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

// const config = {
// }
// config.entry = ['babel-polyfill', './src/index.jsx']

module.exports = {
  module: {
    rules: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }, ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './React-Client/src/index.html',
      filename: './index.html'
    })
  ]
}