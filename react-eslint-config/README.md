## React-eslint-config

专门为 react 项目编写的 eslint 配置

### 使用

结合 webpack 使用

```
npm i react-eslint-config --D
```

eslint.config.js
```
const { join } = require('path')
const  eslint  = require("react-eslint-config");

module.exports = {
  root: true,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
    },
    babelOptions: {
      configFile: join(__dirname, "babel.config.js"),
    },
  },
  parser: "@babel/eslint-parser",
  extends: [eslint],
};

```
webpack.config.js
```
new ESLintPlugin({
  formatter: require("eslint-friendly-formatter"),
  overrideConfigFile: path.join(__dirname, "./eslint.config.js"),
  fix: false,
  useEslintrc: false,
  extensions: ["js", "jsx", "tsx"],
})
```
