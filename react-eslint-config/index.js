module.exports = {
  plugins: ["react", "react-hooks"],
  extends: ["plugin:react/recommended", "airbnb-base"].concat(
    ["./rules/import", "./rules/no", "./rules/react", "./rules/base"].map(
      require.resolve
    )
  ),
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  globals: {
    __ENV__: true,
    __MODE__: true,
    __EXT__: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {},
};
