const path = require('path')
const ip = require('ip')
const cwd = process.cwd()
const isPro = process.argv[2] === 'build'
const splitchunksConfig = require('./splitchunks.config.js')
const parseConfig = require('./parse.config.js')
const pluginsConfig = require('./plugins.config.js')
const { getAdminConfig, __src, __dist } = require('../utils')

module.exports = {
  // 模式
  mode: isPro ? 'production' : 'development',
  // 开发环境开启源代码查看功能
  devtool: isPro ? '' : 'inline-source-map',
  // 入口
  entry: path.resolve(`${cwd}${getAdminConfig.entry || '/src/index.js'}`),
  // 出口
  output: getAdminConfig.output || {
    path: __dist,
    filename: 'js/index.[contenthash].js',
    chunkFilename: 'js/[name].[contenthash].js',
    publicPath: isPro ? getAdminConfig.publicPath || '/' : '/',
  },
  // 分包策略
  optimization: splitchunksConfig,
  // 解析
  resolve: {
    alias: {
      '@': __src
    },
    extensions: ['.ts', '.tsx', '.jsx', '.js', '.css', '.less'],
  },
  // loaders
  module: parseConfig,
  // 插件
  plugins: pluginsConfig,
  // 开发服务器
  devServer: getAdminConfig.devServer || {
    stats: 'errors-only',
    historyApiFallback: true,
    host: ip.address(),
    contentBase: [path.resolve(`${cwd}/dist`), path.resolve(`${cwd}/public`)],
    compress: true,
    overlay: true, // 错误显示在浏览器
  },
}
