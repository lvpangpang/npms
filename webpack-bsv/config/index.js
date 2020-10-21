var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyPlugin = require('copy-webpack-plugin');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');
var ip = require('ip');

var bsvConf = require('../utils/bsv.js')();
var isPro = process.argv[2] === 'build';

var postCssConfig = {
  "browsers": [
    '> 1% in CN',
    'last 2 versions',
    'Firefox >= 20',
    'Safari >= 6',
    'Explorer >= 9',
    'Chrome >= 12',
    'ChromeAndroid >= 4.4',
    'iOS >= 6',
    'and_uc >= 9.1'
  ]
};

module.exports = {
  // 模式
  mode: isPro ? 'production' : 'development',
  // 开发环境开启源代码查看功能
  devtool: isPro ? '' : 'inline-source-map',
  // 入口
  entry: bsvConf.entry || [path.resolve(`${process.cwd()}/src/index.js`)],
  // 出口
  output: bsvConf.output || {
    path: path.resolve(`${process.cwd()}/dist`),
    filename: 'js/index.js',
    chunkFilename: 'js/[name][contenthash].js',
    publicPath: isPro ? bsvConf.publicPath || './' : ''
  },
  // 打包分离第三方依赖库，比如react
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  // 解析
  resolve: {
    alias:  bsvConf.alias || {
      '@': path.resolve(`${process.cwd()}/src/`)
    },
    extensions: ['.ts', '.tsx', '.jsx', '.js', '.styl', '.css', '.less']
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
        use:  ['style-loader', `css-loader${bsvConf.isCssModule ? '?modules' : ''}`, {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins : [
                require('autoprefixer')(postCssConfig)
              ]
            }
          }
        }, 'stylus-loader']
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use:  ['style-loader', `css-loader${bsvConf.isCssModule ? '?modules' : ''}`, {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins : [
                require('autoprefixer')(postCssConfig)
              ]
            }
          }
        },
        'less-loader']
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'img/'
          }
        }]
      }
    ]
  },
  // 插件
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template:  path.resolve(`${process.cwd()}/public/index.html`)
    }),
    isPro ? new CopyPlugin({
      patterns: [{ from: path.resolve(`${process.cwd()}/public`), 
        to: path.resolve(`${process.cwd()}/dist`)
      }]
    }) : function() {}
  ],
  // 开发服务器
  devServer: bsvConf.devServer || {
    historyApiFallback: true,
    host: ip.address(),
    port: bsvConf.port || 6006,
    contentBase:  [path.resolve(`${process.cwd()}/dist`), path.resolve(`${process.cwd()}/public`)],
    compress: true
  }
}