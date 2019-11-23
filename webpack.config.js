const autoprefixer = require('autoprefixer')
const path = require('path')
const webpack = require('webpack')

const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const spritePlugins = require('./sprite.plugins')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  context: __dirname,
  entry: './src/app.js',
  mode: process.env.NODE_ENV || 'development',
  devtool: isProduction ? 'source-map' : 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', 'spritesmith', path.resolve('./src')]
  },
  output: {
    path: path.resolve('./dist'),
    filename: isProduction ? '[name].[hash].js' : '[name].js'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        extractComments: true
      })
    ]
  },
  plugins: getPlugins(),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /index\.jsx?$/,
        loader: 'baggage-loader?style.sass'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [autoprefixer],
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [autoprefixer],
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.ttf|eot|woff|woff2/,
        loader: 'file-loader',
        options: {
          name: isProduction ? '[name].[hash].[ext]' : '[name].[ext]'
        }
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: isProduction ? '[name].[hash].[ext]' : '[name].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              optipng: {
                optimizationLevel: 7
              },
              pngquant: {
                enabled: false
              }
            }
          }
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: isProduction,
          interpolate: true
        }
      }
    ]
  }
}

function getPlugins() {
  const plugins = [
    new MiniCssExtractPlugin({
      filename: isProduction ? '[name].[contenthash].css' : '[name].css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CopyWebpackPlugin(
      [
        {
          from: 'favicons',
          to: 'favicons'
        }
      ]
    ),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`
    }),
    // Sprites building
    ...spritePlugins()
  ]

  if (isProduction) {
    plugins.push(
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: { discardComments: { removeAll: true } }
      })
    )
  }

  return plugins
}
