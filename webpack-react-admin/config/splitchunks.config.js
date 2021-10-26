const { resolve } = require('path')

const splitChunksConfig = {
  splitChunks: {
    chunks: 'all',
    cacheGroups: {
      libs: {
        name: 'libs/chunk-libs',
        test: /[\\/]node_modules[\\/]/,
        priority: 10,
        chunks: 'initial', // 只打包初始时依赖的第三方
      },
      antd: {
        name: 'libs/chunk-antd', // 单独将 antd 拆包
        priority: 20,
        test: /[\\/]node_modules[\\/]antd[\\/]/,
      },
      'antd-moblie': {
        name: 'libs/chunk-antd-mobile', // 单独将 antd-mobile 拆包
        priority: 20,
        test: /[\\/]node_modules[\\/]antd-mobile[\\/]/,
      },
      commons: {
        name: 'common/chunk-comomns',
        test: resolve('src'),
        minChunks: 2,
        priority: 5,
        reuseExistingChunk: true,
      },
    },
  },
}

module.exports = splitChunksConfig
