const path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

// const config = {
// }
// config.entry = ['babel-polyfill', './src/index.jsx']

module.exports = {
  entry: './React-Client/src/index.jsx',
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
      template: './React-Client/dist/index.html',
      filename: './index.html'
    })
  ]
}