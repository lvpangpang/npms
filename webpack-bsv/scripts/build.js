
var webpack = require('webpack')
var prodConf = require('../config/index.js')

webpack(prodConf, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.log('打包出错了');
    console.log(err);
    console.log(stats);
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

  console.log('build success!')
})