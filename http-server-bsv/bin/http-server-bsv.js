#!/usr/bin/env node
const commander = require('commander');

const { version } = require('../package.json');
const Server = require('../src/index.js');

commander
  .option('-p,--port <n>', 'config port') // 配置端口
  .option('-o,--host [value]', 'config hostname') // 配置主机名
  .option('-d,--dir [value]', 'config directory') // 配置访问目录
  .option('-P,--proxyUrl [value]', 'config proxy') // 配置转发地址
  .version(version, '-v,--version') // 展示版本
  .parse(process.argv);

const server = new Server(commander);
server.start();