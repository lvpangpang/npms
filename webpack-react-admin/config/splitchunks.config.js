const { resolve } = require("path");

const splitChunksConfig = {
  splitChunks: {
    chunks: "all",
    cacheGroups: {
      libs: {
        name: "chunk-libs",
        test: /[\\/]node_modules[\\/]/,
        priority: 10,
        chunks: "initial", // 只打包初始时依赖的第三方
      },
      antd: {
        name: "chunk-antd", // 单独将 antd 拆包
        priority: 20, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
        test: /[\\/]node_modules[\\/]antd-mobile[\\/]/,
      },
      commons: {
        name: "chunk-comomns",
        test: resolve("src"),
        minChunks: 2,
        priority: 5,
        reuseExistingChunk: true,
      },
    },
  },
};

module.exports = splitChunksConfig;
