var fs = require('fs');
var util = require('util');
var path = require('path');
var { exec } = require('child_process');
var exec = util.promisify(exec);

var color = require('colors');

module.exports = async function(config) {
  const { name } = config;
  const cwd = process.cwd();
  const tempalteDir = path.join(__dirname, '../template/react-js');
  const targetDir = path.join(cwd, name);

  if(fs.existsSync(targetDir)) {
    console.log(`当前目录已经存在文件夹${name}`.red);
    process.exit();
  }
  console.log('正在生成模板文件...');
  const shell = `cp -r ${tempalteDir} ${targetDir}`;
  await exec(shell);
  console.log('npm i react react-dom webpack-bsv')
  await exec(`cd ${name}&& npm i react react-dom webpack-bsv`);
  console.log('模版文件生成成功'.green);
  console.log(`cd ${name} && npm run start`.green)
};