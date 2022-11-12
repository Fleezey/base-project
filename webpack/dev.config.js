const webpack = require('webpack')
const { merge } = require('webpack-merge')
const path = require('path')
const fastRefresh = require('react-refresh/babel')
const common = require('./common.config.js')

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  target: 'web',

  entry: [
    "webpack-hot-middleware/client",
    path.resolve(__dirname, '../src/index.js'),
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

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [fastRefresh],
          }
        },
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin({
      overlay: {
        sockIntegration: "whm",
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    })
  ]
})
