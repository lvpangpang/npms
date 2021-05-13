const path = require("path");
const { join } = require("path");

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const ip = require("ip");

const postCssConfig = require("./postCss.js");
const adminConf = require("../utils/index.js")();
const isPro = process.argv[2] === "build";
const cwd = process.cwd();

const { resolve } = require("path");

module.exports = {
  // 模式
  mode: isPro ? "production" : "development",
  // 开发环境开启源代码查看功能
  devtool: isPro ? "" : "inline-source-map",
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
  optimization: {
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
  },
  // 解析
  resolve: {
    alias: adminConf.alias || {
      "@": path.resolve(`${cwd}/src/`),
    },
    extensions: [".ts", ".tsx", ".jsx", ".js", ".css", ".less"],
  },
  // loaders
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: [path.resolve(`${cwd}/node_modules`)],
        use: {
          loader: "babel-loader",
          options: {
            sourceType: "unambiguous",
            presets: [
              [
                "@babel/preset-env",
                {
                  modules: false,
                  targets: {
                    browsers: ["> 1%", "last 2 versions"],
                  },
                  useBuiltIns: "usage",
                  corejs: 3,
                },
              ],
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
            plugins: [
              ["@babel/plugin-proposal-decorators", { legacy: true }],
              ["@babel/plugin-proposal-class-properties", { loose: true }],
            ].concat(adminConf.babelPlugins || []),
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          `css-loader${adminConf.isCssModule ? "?modules" : ""}`,
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("autoprefixer")(postCssConfig)],
              },
            },
          },
        ],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          `css-loader${adminConf.isCssModule ? "?modules" : ""}`,
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("autoprefixer")(postCssConfig)],
              },
            },
          },
          "less-loader",
        ],
      },
      {
        test: /\.(png|jpg|svg|gif|otf)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              options: {
                limit: 1024,
              },
              outputPath: "file/",
            },
          },
        ],
      },
    ],
  },
  // 插件
  plugins: [
    !isPro
      ? new ESLintPlugin({
          formatter: require("eslint-friendly-formatter"),
          overrideConfigFile: join(__dirname, "./eslint.config.js"),
          fix: false,
          useEslintrc: false,
          extensions: ["js", "jsx", "tsx"],
        })
      : () => {},
    new webpack.DefinePlugin({
      NODE_ENV: isPro ? "production" : "development",
    }),
    isPro ? new CleanWebpackPlugin() : function () {},
    new HtmlWebpackPlugin({
      template: path.resolve(`${cwd}/public/index.html`),
    }),
    isPro
      ? new CopyPlugin({
          patterns: [
            {
              from: path.resolve(`${cwd}/public`),
              to: path.resolve(`${cwd}/dist`),
            },
          ],
        })
      : function () {},
  ],
  // 开发服务器
  devServer: adminConf.devServer || {
    historyApiFallback: true,
    host: ip.address(),
    port: adminConf.port || "1234",
    contentBase: [path.resolve(`${cwd}/dist`), path.resolve(`${cwd}/public`)],
    compress: true,
    overlay: true,
  },
};
