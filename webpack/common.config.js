const path = require('path')

const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  target: 'web',

  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: path.resolve(__dirname, '../dist'),
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

  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              modules: {
                exportGlobals: true,
                localIdentName: '[path][name]--[local]',
                namedExport: true,
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              modules: {
                exportGlobals: true,
                localIdentName: '[path][name]--[local]',
                namedExport: true,
              },
            },
          },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100,
          },
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: '[name]-[contenthash].[ext]' },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      filename: path.resolve(__dirname, '../dist/index.html'),
      template: path.resolve(__dirname, '../index.html'),
    }),
  ]
}
