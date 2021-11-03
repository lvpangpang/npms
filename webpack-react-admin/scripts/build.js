const webpack = require('webpack')
const webpackConfig = require('../config/webpack.config.js')
const { success, error, createIndex, getAdminConfig } = require('../utils')

const { useFileRouter } = getAdminConfig
if (useFileRouter) {
  createIndex()
}
webpack(webpackConfig, (err, stats) => {
  if (err || stats.hasErrors()) {
    error(err)
    return
  }
  process.stdout.write(
    stats.toString({
      colors: true,
      displayChunks: true,
      hash: false,
      source: true,
      modules: false,
      children: false,
      chunks: true,
      progress: true,
      chunkModules: false,
    }) + '\r\n'
  )

  success('打包成功!')
})
