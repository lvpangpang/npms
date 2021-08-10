const path = require('path');
const cwd = process.cwd();
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const WebpackBar = require('webpackbar')
const isPro = process.argv[2] === "build";
const env = process.argv[3] && process.argv[3].split('=')[1]

const pluginsConfig = [
  new WebpackBar(),
  !isPro
    ? new ESLintPlugin({
        formatter: require('eslint-friendly-formatter'),
        overrideConfigFile: path.join(__dirname, './eslint.config.js'),
        fix: false,
        useEslintrc: false,
        extensions: ['js', 'jsx', 'tsx'],
      })
    : () => {},
  new webpack.DefinePlugin({
    __ENV__: JSON.stringify(env)
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
]

module.exports = pluginsConfig;
