var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');// JS压缩
var { CleanWebpackPlugin } = require('clean-webpack-plugin');
var path = require('path');

module.exports = [
  new CleanWebpackPlugin(),
  // new UglifyJsPlugin(),
  new ExtractTextPlugin('style.css'),
  new HtmlWebpackPlugin({
    template:  path.resolve(`${process.cwd()}/public/index.html`)
  })
];
