const webpack = require('webpack')
const path = require('path')

const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")


module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  target: 'web',
  
  entry: [
    'react-hot-loader/patch',
    path.resolve(__dirname, '../src/index.js'),
    'webpack-hot-middleware/client',
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },

  optimization: {
    runtimeChunk: {
      name: 'runtime',
    },

    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          priority: 20,
          enforce: true,
        },
        vendor: {
          name: 'vendor',
          chunks: 'all',
          priority: 10,
          enforce: true,
          test: /node_modules/,
        }
      }
    }
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
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { hmr: true },
          },
          { loader: 'css-loader', options: { localIdentName: '[path][name]--[local]' } },
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { hmr: true },
          },
          { loader: 'css-loader', options: { localIdentName: '[path][name]--[local]' } },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: 'url-loader?limit=10000'
        }
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: {
          loader: 'url-loader?limit=100',
        }
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, '../index.html'),
      filename: path.resolve(__dirname, '../dist/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
    })
  ]
}