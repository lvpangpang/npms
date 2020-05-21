var path = require('path');
var ip = require('ip');

module.exports = {
  historyApiFallback: true,
  host: ip.address(),
  port: 9001,
  contentBase:  [path.resolve(`${process.cwd()}/dist`), path.resolve(`${process.cwd()}/public`)],
  compress: true,
  proxy: {
    "/api": {
      target: "http://localhost:3000",
      pathRewrite: {"^/api" : ""}
    }
  }
};