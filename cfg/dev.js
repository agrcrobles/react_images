var path = require('path');
var webpack = require('webpack');
var _ = require('lodash');

var baseConfig = require('./base');

// Add needed plugins here
var BowerWebpackPlugin = require('bower-webpack-plugin');

var config = _.merge({
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  cache: true,
  devtool: 'eval',// WHAT IS DEVTOOL?
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    })
  ]
}, baseConfig);
//
// var config = _.merge({
//   entry: path.join(__dirname, '../src/components/run'),
//   cache: false,
//   devtool: 'sourcemap', // WHAT IS DEVTOOL?
//   plugins: [
//     new webpack.optimize.DedupePlugin(),
//     new webpack.DefinePlugin({
//       'process.env.NODE_ENV': '"production"'
//     }),
//     new BowerWebpackPlugin({
//       searchResolveModulesDirectories: false
//     }),
//     new webpack.optimize.UglifyJsPlugin(),
//     new webpack.optimize.OccurenceOrderPlugin(),
//     new webpack.optimize.AggressiveMergingPlugin(),
//     new webpack.NoErrorsPlugin()
//   ]
// }, baseConfig);
var reduxSrc = path.join(__dirname, '..', '..', 'src')
config.module.loaders.push({
  test: /\.js$/,
  loaders: [ 'babel' ],
  include: reduxSrc
})
// Add needed loaders
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'react-hot!babel-loader',
  include: path.join(__dirname, '/../src')
});

module.exports = config;
