const webpack = require('webpack')
const webpackConfig = require('../config/webpack.config.js')

webpack(webpackConfig, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.log(err);
    return
  }
  process.stdout.write(stats.toString({
    colors: true,
    displayChunks: true,
    hash: false,
    source: true,
    modules: false,
    children: false,
    chunks: true,
    progress: true,
    chunkModules: false
  }) + '\r\n')

  console.log('打包成功!')
})