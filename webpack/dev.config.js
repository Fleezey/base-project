const webpack = require('webpack')
const { merge } = require('webpack-merge')
const path = require('path')
const common = require('./common.config.js')

const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  target: 'web',
  
  entry: [
    'react-hot-loader/patch',
    path.resolve(__dirname, '../src/index.js'),
    'webpack-hot-middleware/client',
  ],

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: ['node_modules', path.join(__dirname, '../src')],
  },

  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    historyApiFallback: true,
    hot: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    })
  ]
})
