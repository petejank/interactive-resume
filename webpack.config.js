const autoprefixer = require('autoprefixer')
const path = require('path');
const webpack = require('webpack');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const spritePlugins = require('./sprite.plugins');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  context: __dirname,
  entry: './src/app.js',
  mode: process.env.NODE_ENV || 'development',
  devtool: isProduction ? 'source-map' : 'inline-source-map',
  resolve: {
    modules: ['node_modules', 'spritesmith', path.resolve('./src')]
  },
  output: {
    path: path.resolve(`./dist`),
    filename: isProduction ? '[name].[hash].js' : '[name].js'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          warnings: false,
          output: {
            comments: false
          }
        }
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules|test/,
        loader: 'babel-loader'
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
        test: /\.scss$/,
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
              sourceMap: true,
              includePaths: [path.resolve('./node_modules')]
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
  },
  plugins: [
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
          to: `favicons`
        }
      ]
    ),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`
    }),
    // Sprites building
    ...spritePlugins(),
  ],
};
