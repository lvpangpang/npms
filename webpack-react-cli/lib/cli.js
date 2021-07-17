var fs = require('fs')
var util = require('util')
var path = require('path')
var { exec } = require('child_process')
var exec = util.promisify(exec)

var chalk = require('chalk')
var Spinner = require('cli-spinner').Spinner

var spinner = new Spinner('%s')
spinner.setSpinnerString('|/-\\')

module.exports = async function (config) {
  const { name } = config
  const cwd = process.cwd()
  const tempalteDir = path.join(__dirname, '../template/H5')
  const targetDir = path.join(cwd, name)

  if (fs.existsSync(targetDir)) {
    console.log(chalk.red(`✖ 当前目录已经存在文件夹${name}`))
    process.exit()
  }

  console.log('正在拉取模板文件...')
  spinner.start()
  const shell = `cp -r ${tempalteDir} ${targetDir}`
  await exec(shell)
  spinner.stop()
  console.log(chalk.green('✔ 模板文件生成成功'))

  try {
    await exec('yarn -v')
  } catch (error) {
    await exec('npm i -g yarn')
  }

  console.log('开始安装开发依赖...')
  spinner.start()
  await exec(`cd ${name} && yarn add webpack-react-admin --dev`)
  spinner.stop()
  console.log(chalk.green('✔ 开发依赖安装成功'))

  console.log(chalk.green(`cd ${name} && yarn && npm start`))
}
