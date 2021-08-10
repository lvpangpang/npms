const adminConf = require("../utils/index.js")();

console.log(adminConf.babelPlugins)
const babelConfig = {
  presets: [
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          browsers: ['> 1%', 'last 2 versions'],
        },
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    '@babel/typescript',
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    ['import', { libraryName: 'antd', style: 'css' }, 'antd'],
    ['import', { libraryName: 'antd-mobile', style: 'css' }, 'antd-mobile'],
  ].concat(adminConf.babelPlugins || []),
}

module.exports = babelConfig;