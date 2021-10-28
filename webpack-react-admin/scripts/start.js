const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const webpackConfig = require('../config/webpack.config.js')
const {
  getAdminConfig,
  getUnoccupiedPort,
  open,
  checkAdminVersion,
  checkPackageJsonVersion
} = require('../utils')

async function start() {
  checkAdminVersion()
  checkPackageJsonVersion()
  const port = await getUnoccupiedPort(getAdminConfig.port)
  const options = Object.assign(webpackConfig.devServer, { port })
  webpackDevServer.addDevServerEntrypoints(webpackConfig, options)
  const compiler = webpack(webpackConfig)
  const devServer = new webpackDevServer(compiler, options)
  open(port)
  devServer.listen(port, options.host)
}

start()
