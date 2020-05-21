var webpackDevServer = require('webpack-dev-server')
var webpack = require('webpack')
var devConf = require('../config/index.js')
var options = devConf.devServer

webpackDevServer.addDevServerEntrypoints(devConf, options)
var compiler = webpack(devConf)
var start = new webpackDevServer(compiler, options)

start.listen(options.port, options.host)