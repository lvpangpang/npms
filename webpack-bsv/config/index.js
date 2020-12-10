var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyPlugin = require('copy-webpack-plugin');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');
var ip = require('ip');

var postCssConfig = require('./postCss.js');
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
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: [
          path.resolve(`${process.cwd()}/node_modules`)
        ],
        use: {
          loader: 'babel-loader',
          options: {
            sourceType: 'unambiguous',
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript' // 这样处理才能使ts，tsx这种代码分割
            ],
            plugins: [
              '@babel/plugin-transform-runtime', // babel-profiyy按需加载
              bsvConf.babelPlugins || {} // 按需加载第三方组件库
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
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
    isPro ? new CleanWebpackPlugin() : function() {},
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