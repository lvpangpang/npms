module.exports = {
  entry: '/src/index.tsx',
  isCssModule: true,
  babelPlugins: [
   ["import", { libraryName: "antd-mobile", "style": "css" }]
  ]
};