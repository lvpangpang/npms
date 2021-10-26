const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const webpackConfig = require('../config/webpack.config.js')
const { getAdminConfig, getUnoccupiedPort, open, checkAdminVersion } = require('../utils')

async function start() {
  checkAdminVersion()
  const port = await getUnoccupiedPort(getAdminConfig.port)
  const options = Object.assign(webpackConfig.devServer, { port })
  webpackDevServer.addDevServerEntrypoints(webpackConfig, options)
  const compiler = webpack(webpackConfig)
  const devServer = new webpackDevServer(compiler, options)
  open(port)
  devServer.listen(port, options.host)
}

start()
