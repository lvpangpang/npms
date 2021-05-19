const webpack = require("webpack");
const webpackDevServer = require("webpack-dev-server");
const webpackConfig = require("../config/webpack.config.js");
const adminConf = require("../utils/index.js")();

const getUnoccupiedPort = require('../utils/getUnoccupiedPort.js')

async function start() {
  const port = await getUnoccupiedPort(adminConf.port);
  const options = Object.assign(webpackConfig.devServer, { port });
  webpackDevServer.addDevServerEntrypoints(webpackConfig, options);
  const compiler = webpack(webpackConfig);
  const devServer = new webpackDevServer(compiler, options);
  devServer.listen(port, options.host);
}

start();
