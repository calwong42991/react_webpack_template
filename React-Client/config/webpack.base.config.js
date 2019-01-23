const path = require('path')
const webpack = require('webpack');
const merge = require('webpack-merge');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  const {
    PLATFORM,
    VERSION
  } = env;

  const APP_DIR = path.resolve(__dirname, '../src/index.jsx');

  return merge([{
    entry: ['@babel/polyfill', APP_DIR],
    module: {
      rules: [{
          test: /\.jsx$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.scss$/,
          use: [
            PLATFORM === 'production' ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'sass-loader'
          ]
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './React-Client/src/index.html',
        filename: './index.html'
      }),
      new webpack.DefinePlugin({
        'process.env.VERSION': JSON.stringify(env.VERSION),
        'process.env.PLATFORM': JSON.stringify(env.PLATFORM)
      }),
      new CopyWebpackPlugin([{
        from: 'React-Client/src/static'
      }]),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ]
  }])
}