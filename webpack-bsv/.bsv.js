module.exports = {
  entry: '/src/index.tsx',
  port: 8888,
  babelPlugins: ["import", { libraryName: "antd-mobile", "style": "css" }]
};