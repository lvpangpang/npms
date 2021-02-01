const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ip = require('ip');

const postCssConfig = require('./postCss.js');
const adminConf = require('../utils/index.js')();
const isPro = process.argv[2] === 'build';
const cwd = process.cwd();

module.exports = {
  // 模式
  mode: isPro ? 'production' : 'development',
  // 开发环境开启源代码查看功能
  devtool: isPro ? '' : 'inline-source-map',
  // 入口
  entry: path.resolve(`${cwd}${adminConf.entry || '/src/index.js'}`),
  // 出口
  output: adminConf.output || {
    path: path.resolve(`${cwd}/dist`),
    filename: 'js/index.[contenthash].js',
    chunkFilename: 'js/[name].[contenthash].js',
    publicPath: isPro ? bsvConf.publicPath || '/' : '/'
  },
  // 打包分离第三方依赖库，比如react
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  // 解析
  resolve: {
    alias: adminConf.alias || {
      '@': path.resolve(`${cwd}/src/`)
    },
    extensions: ['.ts', '.tsx', '.jsx', '.js', '.css', '.less']
  },
  // loaders
  module: {
    rules: [{
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: [
          path.resolve(`${cwd}/node_modules`)
        ],
        use: {
          loader: 'babel-loader',
          options: {
            sourceType: 'unambiguous',
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ],
            plugins: [
              [
                '@babel/plugin-transform-runtime',
                {
                  "corejs": {
                    "version": 3,
                    "proposals": true
                  },
                  "useESModules": true
                }
              ],
              ...[
                ["@babel/plugin-proposal-decorators", { "legacy": true }],
                ["@babel/plugin-proposal-class-properties", { "loose": true }]
              ].concat(adminConf.babelPlugins||[])
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', `css-loader${adminConf.isCssModule ? '?modules' : ''}`, {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer')(postCssConfig)
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ['style-loader', `css-loader${adminConf.isCssModule ? '?modules' : ''}`, {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer')(postCssConfig)
                ]
              }
            }
          },
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpg|svg|gif|otf)$/,
        use: [{
          loader: 'url-loader',
          options: {
            options: {
              limit: 1024
            },
            outputPath: 'file/'
          }
        }]
      }
    ]
  },
  // 插件
  plugins: [
    new webpack.DefinePlugin({
      'NODE_ENV': isPro ? 'production' : 'development',
    }),
    isPro ? new CleanWebpackPlugin() : function () {},
    new HtmlWebpackPlugin({
      template: path.resolve(`${cwd}/public/index.html`)
    }),
    isPro ? new CopyPlugin({
      patterns: [{
        from: path.resolve(`${cwd}/public`),
        to: path.resolve(`${cwd}/dist`)
      }]
    }) : function () {}
  ],
  // 开发服务器
  devServer: adminConf.devServer || {
    historyApiFallback: true,
    host: ip.address(),
    port: adminConf.port || '1234',
    contentBase: [path.resolve(`${cwd}/dist`), path.resolve(`${cwd}/public`)],
    compress: true
  }
}