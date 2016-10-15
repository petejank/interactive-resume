const path = require('path');

module.exports = (config) => {
  config.set({
    browsers: ['PhantomJS'],
    singleRun: false,
    frameworks: ['mocha', 'sinon-chai'],
    files: [
      'tests.webpack.js'
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },
    reporters: ['dots'],
    webpack: {
      context: __dirname,
      resolve: { // Root directory
        root: [
          path.resolve('./src')
        ],
        alias: {
          'sinon': 'sinon/pkg/sinon'
        }
      },
      externals: {
        'react/addons': true,
        'react/lib/ReactContext': true,
        'react/lib/ExecutionEnvironment': true
      },
      module: {
        noParse: [
          /node_modules\/sinon\//
        ],
        loaders: [
          { //transpile ES2015 with JSX into ES5
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel?presets[]=react,presets[]=es2015'
          },
          {
            test: /\.scss|css|ttf|svg|eot|woff$/,
            loader: 'ignore-loader'
          },
          {
            test: /\.json$/,
            loader: 'json-loader'
          }
        ]
      }
    },
    webpackServer: {
      noInfo: true,
      stats: 'errors-only'
    }
  });
};
