const path = require("path");
const cwd = process.cwd();
const adminConf = require("../utils/index.js")();
const babelConfig = require("./babel.config.js");
const postCssConfig = require("./postCss.config.js");

const parseConfig = {
  rules: [
    {
      test: /\.(ts|tsx|js|jsx)$/,
      exclude: [path.resolve(`${cwd}/node_modules`)],
      use: {
        loader: "babel-loader",
        options: {
          sourceType: "unambiguous",
          ...babelConfig,
        },
      },
    },
    {
      test: /\.css$/,
      use: [
        "style-loader",
        `css-loader${adminConf.isCssModule ? "?modules" : ""}`,
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [require("autoprefixer")(postCssConfig)],
            },
          },
        },
      ],
    },
    {
      test: /\.less$/,
      exclude: /node_modules/,
      use: [
        "style-loader",
        `css-loader${adminConf.isCssModule ? "?modules" : ""}`,
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [require("autoprefixer")(postCssConfig)],
            },
          },
        },
        "less-loader",
      ],
    },
    {
      test: /\.(png|jpg|svg|gif|otf)$/,
      use: [
        {
          loader: "url-loader",
          options: {
            options: {
              limit: 1024,
            },
            outputPath: "file/",
          },
        },
      ],
    },
  ],
};

module.exports = parseConfig;
