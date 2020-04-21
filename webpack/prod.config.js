const path = require('path')
const merge = require('webpack-merge')
const common = require('./common.config.js')

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = merge(common, {
  devtool: 'none',
  mode: 'production',

  entry: [
    path.resolve(__dirname, '../src/index.js'),
  ],

  output: {
    filename: 'bundle-[hash:8].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'bundle-[hash:8].css',
    }),
  ]
})
