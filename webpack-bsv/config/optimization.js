var OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // CSS压缩

module.exports = {
  // 压缩css
  minimizer: [
    new OptimizeCSSAssetsPlugin({})
  ]
}