const path = require("path");
const ip = require("ip");
const cwd = process.cwd();
const isPro = process.argv[2] === "build";

const adminConf = require("../utils/index.js")();
const splitchunksConfig = require("./splitchunks.config.js");
const parseConfig = require("./parse.config.js");
const pluginsConfig = require("./plugins.config.js");

module.exports = {
  // 模式
  mode: isPro ? "production" : "development",
  // 开发环境开启源代码查看功能
  devtool: isPro ? "source-map" : "inline-source-map",
  // 入口
  entry: path.resolve(`${cwd}${adminConf.entry || "/src/index.js"}`),
  // 出口
  output: adminConf.output || {
    path: path.resolve(`${cwd}/dist`),
    filename: "js/index.[contenthash].js",
    chunkFilename: "js/[name].[contenthash].js",
    publicPath: isPro ? adminConf.publicPath || "/" : "/",
  },
  // 分包策略
  optimization: splitchunksConfig,
  // 解析
  resolve: {
    alias: adminConf.alias || {
      "@": path.resolve(`${cwd}/src/`),
    },
    extensions: [".ts", ".tsx", ".jsx", ".js", ".css", ".less"],
  },
  // loaders
  module: parseConfig,
  // 插件
  plugins: pluginsConfig,
  // 开发服务器
  devServer: adminConf.devServer || {
    historyApiFallback: true,
    host: ip.address(),
    port: adminConf.port || "1234",
    contentBase: [path.resolve(`${cwd}/dist`), path.resolve(`${cwd}/public`)],
    compress: true,
    overlay: true, // 错误显示在浏览器
  },
};
