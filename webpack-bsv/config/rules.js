var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: [
        path.resolve(`${process.cwd()}/node_modules`)
      ],
      use: {
        loader: 'babel-loader',
        options: {
          sourceType: 'unambiguous',
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ],
          plugins: [
            '@babel/plugin-transform-runtime' // babel-profiyy按需加载
          ]
        }
      }
    },
    {
      test: /\.(css|styl)$/,
      exclude: /node_modules/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ['css-loader', 'stylus-loader']
      })
    },
    {
      test: /\.(png|jpg|svg|gif)$/,
      use: ['file-loader']
    }
  ]
}