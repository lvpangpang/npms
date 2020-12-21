module.exports = {
  entry: '/src/index.tsx',
  port: 8888,
  babelPlugins: [
    ["import", { "libraryName": "antd-mobile", "style": "css" }],
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ]
};