var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');
var OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // CSS压缩
var ip = require('ip');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var uglifyjs = require('uglifyjs-webpack-plugin');

var bsvConf = require('../utils/bsv.js')();

var isPro = process.argv[2] === 'build';

module.exports = {
  // 模式
  mode: isPro ? 'production' : 'development',
  // 开发环境开启源代码查看功能
  devtool: isPro ? '' : 'inline-source-map',
  // 入口
  entry: bsvConf.entry || [path.resolve(`${process.cwd()}/src/index.js`)],
  // 出口
  output: {
    path: path.resolve(`${process.cwd()}/dist`),
    filename: 'index.js',
    chunkFilename: '[name][contenthash].js',
    publicPath: isPro ? bsvConf.publicPath || './' : ''
  },
  // 解析
  resolve: {
    alias:  bsvConf.alias || {
      '@': path.resolve(`${process.cwd()}/src/`)
    },
    extensions: ['.jsx', '.js', '.styl', '.css']
  },
  // loaders
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: [
          path.resolve(`${process.cwd()}/node_modules`)
        ],
        use: ['ts-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [
          path.resolve(`${process.cwd()}/node_modules`)
        ],
        use: {
          loader: 'babel-loader',
          options: {
            sourceType: 'unambiguous',
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: [
              '@babel/plugin-transform-runtime' // babel-profiyy按需加载
            ]
          }
        }
      },
      {
        test: /\.(css|styl)$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'stylus-loader']
        })
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  // 优化
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  // 插件
  plugins: [
    new CleanWebpackPlugin(),
    new ExtractTextPlugin('style.css'),
    new uglifyjs(),
    new HtmlWebpackPlugin({
      template:  path.resolve(`${process.cwd()}/public/index.html`)
    })
  ],
  // 开发服务器
  devServer: bsvConf.devServer || {
    historyApiFallback: true,
    host: ip.address(),
    port: 7012,
    contentBase:  [path.resolve(`${process.cwd()}/dist`), path.resolve(`${process.cwd()}/public`)],
    compress: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: {"^/api" : ""}
      }
    }
  }
}