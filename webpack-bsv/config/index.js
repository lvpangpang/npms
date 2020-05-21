var webpack = require('webpack');
var path = require('path');
var bsvConf = require('../utils/bsv.js')();

var rules = require('../config/rules.js');
var plugin = require('../config/plugins.js');
var optimization = require('../config/optimization.js');
var devServer = require('../config/devServer.js');

var isPro = process.argv[2] === 'build';

module.exports = {
  // 模式
  mode: isPro ? 'production' : 'development',
  // 开发环境开启源代码查看功能
  devtool: isPro ? '' : 'inline-source-map',
  // 入口
  entry: bsvConf.entry || [path.resolve(`${process.cwd()}/src/index.js`)],
  // 出口
  output: {
    path: path.resolve(`${process.cwd()}/dist`),
    filename: 'index.js',
    chunkFilename: '[name][contenthash].js',
    publicPath: isPro ? bsvConf.publicPath || './' : ''
  },
  // 解析
  resolve: {
    alias:  bsvConf.alias || {
      '@': path.resolve(`${process.cwd()}/src/`)
    },
    extensions: ['.jsx', '.js', '.styl', '.css']
  },
  // loaders
  module: {
   rules: [rules]
  },
  // 优化
  optimization: optimization,
  // 插件
  plugins: plugin,
  // 开发服务器
  devServer: bsvConf.devServer || devServer
}