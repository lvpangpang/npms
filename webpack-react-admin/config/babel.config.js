const adminConf = require("../utils/index.js")();

const babelConfig = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
        targets: {
          browsers: ["> 1%", "last 2 versions"],
        },
        // useBuiltIns: "usage",
        // useBuiltIns: "entry",
        corejs: 3,
      },
    ],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: false }],
  ].concat(adminConf.babelPlugins || []),
};

module.exports = babelConfig;