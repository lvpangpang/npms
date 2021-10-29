const { resolve } = require('path')
const resolvePath = (path) => resolve(process.cwd(), path)

module.exports = {
  resolvePath,
  __packageJson: resolvePath('package.json'),
  __nodeModules: resolvePath('node_modules'),
  __adminConfig: resolvePath('admin.config.js'),
  __src: resolvePath('src'),
  __root: process.cwd(),
  __public: resolvePath('public'),
  __publicIndexHtml: resolvePath('public/index.html'),
  __dist: resolvePath('dist')
}
