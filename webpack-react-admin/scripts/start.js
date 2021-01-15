const webpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')

const webpackConfig = require('../config/webpack.config.js')
const options = webpackConfig.devServer

webpackDevServer.addDevServerEntrypoints(webpackConfig, options)
const compiler = webpack(webpackConfig)
const devServer = new webpackDevServer(compiler, options)

devServer.listen(options.port, options.host)