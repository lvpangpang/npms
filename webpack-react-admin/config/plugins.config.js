const path = require('path')
const webpack = require('webpack')
const { ModuleFederationPlugin } = require('webpack').container
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const WebpackBar = require('webpackbar')

const { getAdminConfig, getProcessArgv, __public, __publicIndexHtml, __dist } = require('../utils')

const PluginsConfig = [
  new webpack.DefinePlugin({
    __ENV__: JSON.stringify(getProcessArgv()),
  }),
  new WebpackBar(),
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: __publicIndexHtml,
  }),
  new CopyPlugin({
    patterns: [
      {
        from: __public,
        to: __dist,
      },
    ],
  }),
]
if (getAdminConfig.useEslint) {
  PluginsConfig.push(
    new ESLintPlugin({
      formatter: require('eslint-friendly-formatter'),
      overrideConfigFile: path.join(__dirname, './eslint.config.js'),
      fix: false,
      useEslintrc: false,
      extensions: ['js', 'jsx', 'tsx'],
    })
  )
}
// if (getAdminConfig.micList) {
//   new ModuleFederationPlugin({
//     // 提供给其他服务加载的文件
//     filename: 'remoteEntry.js',
//     // 唯一ID，用于标记当前服务
//     name: 'test1',
//     // 需要暴露的模块，使用时通过 `${name}/${expose}` 引入
//     exposes: {
//       './List': '../src/pages/home',
//     },
//   })
// }
// if (getAdminConfig.useMicList) {
//   PluginsConfig.push(
//     new ModuleFederationPlugin({
//       name: 'app1',
//       // 引用 app2 的服务
//       remotes: {
//         app2: 'app2@http://localhost:3002/remoteEntry.js',
//       },
//     })
//   )
// }
PluginsConfig.concat(getAdminConfig.plugins || [])

module.exports = PluginsConfig
