#!/usr/bin/env node
const commander = require('commander');

const { version } = require('../package.json');
const Server = require('../src/index.js');
const { port } = require('../src/config');
const argv   = require('minimist')(process.argv.slice(2));

if (argv.h || argv.help) {
  console.log([
    'usage: http-server [path] [options]',
    '',
    'options:',
    '  -p --port    Port to use [8080]',
    '  -g --gzip    Serve gzip files when possible [false]',
    '  -P --proxy         Fallback proxy if the request cannot be resolved. e.g.: http://someurl.com',
    '  -h --help          Print this list and exit.',
    '  -v --version       Print the version and exit.'
  ].join('\n'));
  process.exit();
}

if(argv.v || argv.version) {
  console.log(version);
  process.exit();
}

// p 输入的key | port 代码获取输入值的key
commander
  .option('-p,--port [value]', 'config port') // 配置端口
  .option('-P,--proxyUrl [value]', 'config proxy') // 配置转发地址
  .parse(process.argv);

const server = new Server(commander);
server.start();