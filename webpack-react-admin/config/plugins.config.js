const path = require('path')
const webpack = require('webpack')
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
  getAdminConfig.useEslint
    ? new ESLintPlugin({
        formatter: require('eslint-friendly-formatter'),
        overrideConfigFile: path.join(__dirname, './eslint.config.js'),
        fix: false,
        useEslintrc: false,
        extensions: ['js', 'jsx', 'tsx'],
      })
    : () => {},
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
].concat(getAdminConfig.plugins || [])

module.exports = PluginsConfig
