const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

const spritePlugins = require('./sprite.plugins');

const DIST_DIR = 'dist';

module.exports = {
  context: __dirname,
  entry: './src/app.js',
  devtool: 'source-map',
  resolve: {
    root: [
      path.resolve('./src')
    ],
    modulesDirectories: ['node_modules', 'spritesmith']
  },
  output: {
    path: path.resolve(`./${DIST_DIR}`),
    filename: `scripts.[hash].js`
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules|test/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css|scss$/,
        loaders: [
          'style',
          'css',
          'sass?outputStyle=expanded',
          'autoprefixer?browsers=last 3 versions'
        ]
      },
      {
        test: /\.ttf|eot|woff|woff2/,
        loader: 'file-loader?name=[name].[hash].[ext]'
      },
      {
        test: /\.png$/,
        loaders: [
          'file-loader?name=[name].[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=9&interlaced=false'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html?interpolate'
      }
    ]
  },
  htmlLoader: {
    interpolate: true
  },
  plugins: getPlugins(),
  webpackServer: {
    noInfo: true,
    stats: 'errors-only'
  }
};

function getPlugins() {
  let plugins = [
    new htmlWebpackPlugin({
      template: './src/index.html'
    }),
    new copyWebpackPlugin(
      [
        {
          from: 'favicons',
          to: `favicons`
        }
      ]),
    // Sprites building
    ...spritePlugins()
  ];

  if (process.env.NODE_ENV === 'production') {
    plugins = plugins.concat([
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        comments: false
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
      }),
    ])
  }

  return plugins;
}
