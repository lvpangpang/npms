export default {
  entry: 'src/index.js',
  esm: 'babel',
  cjs: 'babel',
  extraBabelPlugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 2
      }
    ]
  ]
}
