const shell = require('shelljs')
const { info, error } = require('./info')

function getModuleVersion(name) {
  const { stdout } = shell.exec(`npm view ${name} version`, {
    silent: true,
  })
  return stdout.replace(/\s|[\r\n]/g, '')
}
function checkAdminVersion() {
  const adminName = 'webpack-react-admin'
  const cwd = process.cwd()
  const package = require(`${cwd}/package.json`)
  const packAdminVersion = (package['dependencies'][adminName] || package['devDependencies'][adminName]).replace(/[\^\~]/g, '')
  const lastAdminVersion = getModuleVersion(adminName)
  info('正在检测脚手架是否为最新版本...')
  if (packAdminVersion !== lastAdminVersion) {
    error(`请手动安装最新版本的脚手架再启动项目\n  最新的版本号为V${lastAdminVersion}`)
    return
  }
}

module.exports = checkAdminVersion
