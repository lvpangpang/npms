const path = require('path');
const cwd = process.cwd();
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const isPro = process.argv[2] === "build";

const pluginsConfig = [
  !isPro
    ? new ESLintPlugin({
        formatter: require("eslint-friendly-formatter"),
        overrideConfigFile: path.join(__dirname, "./eslint.config.js"),
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
];

module.exports = pluginsConfig;
