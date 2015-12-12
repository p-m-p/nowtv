const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({
    basePath: 'src/',
    frameworks: ['mocha', 'chai', 'sinon', 'phantomjs-shim'],
    browsers: ['PhantomJS'],
    singleRun: true,
    files: ['**/__tests__/*-test.js'],
    preprocessors: {
      '**/__tests__/*.js': ['webpack']
    },
    webpack: {
      module: webpackConfig.module,
      plugins: webpackConfig.plugins,
      resolve: {
        alias: Object.assign({
          helpers: path.resolve(__dirname, 'src/__tests__/helpers'),
          fixtures: path.resolve(__dirname, 'src/__tests__/fixtures')
        }, webpackConfig.resolve.alias)
      }
    },
    webpackMiddleware: { noInfo: true },
    reporters: ['mocha'],
    plugins: ['karma-*']
  });
}
