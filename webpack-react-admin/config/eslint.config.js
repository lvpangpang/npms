const { join } = require('path')

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
  // extends: ["react-eslint-config"],
  // extends: ["../node_modules/react-eslint-config/index.js"],
  extends: ["../../react-eslint-config/index.js"],
};
