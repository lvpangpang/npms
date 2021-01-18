var fs = require('fs');
var util = require('util');
var path = require('path');
var { exec } = require('child_process');
var exec = util.promisify(exec);

var color = require('colors');

module.exports = async function(config) {
  const { name } = config;
  const cwd = process.cwd();
  const tempalteDir = path.join(__dirname, '../template/H5');
  const targetDir = path.join(cwd, name);

  if(fs.existsSync(targetDir)) {
    console.log(`当前目录已经存在文件夹${name}`.red);
    process.exit();
  }
  console.log('正在生成模板文件...');
  const shell = `cp -r ${tempalteDir} ${targetDir}`;
  await exec(shell);
  console.log('模板文件生成成功'.green);

  console.log('开始安装生产依赖...');
  await exec(`cd ${name} && npm i react react-dom react-router-dom mobx mobx-react antd-mobile`);
  console.log('生产依赖生成成功'.green);

  console.log('开始安装开发依赖...');
  await exec(`cd ${name} && npm i webpack-react-admin -D`);
  console.log('开发依赖安装成功'.green);

  console.log(`cd ${name} && npm run start`.green)
};