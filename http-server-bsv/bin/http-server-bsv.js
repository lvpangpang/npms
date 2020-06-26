#!/usr/bin/env node
const commander = require('commander');

const { version } = require('../package.json');
const Server = require('../src/index.js');
const argv   = require('minimist')(process.argv.slice(2));

if (argv.h || argv.help) {
  console.log([
    'usage: http-server [path] [options]',
    '',
    'options:',
    '  -p --port    Port to use [8080]',
    '  -a           Address to use [0.0.0.0]',
    '  -d           Show directory listings [true]',
    '  -i           Display autoIndex [true]',
    '  -g --gzip    Serve gzip files when possible [false]',
    '  -b --brotli  Serve brotli files when possible [false]',
    '               If both brotli and gzip are enabled, brotli takes precedence',
    '  -e --ext     Default file extension if none supplied [none]',
    '  -s --silent  Suppress log messages from output',
    '  --cors[=headers]   Enable CORS via the "Access-Control-Allow-Origin" header',
    '                     Optionally provide CORS headers list separated by commas',
    '  -o [path]    Open browser window after starting the server.',
    '               Optionally provide a URL path to open the browser window to.',
    '  -c           Cache time (max-age) in seconds [3600], e.g. -c10 for 10 seconds.',
    '               To disable caching, use -c-1.',
    '  -t           Connections timeout in seconds [120], e.g. -t60 for 1 minute.',
    '               To disable timeout, use -t0',
    '  -U --utc     Use UTC time format in log messages.',
    '  --log-ip     Enable logging of the client\'s IP address',
    '',
    '  -P --proxy         Fallback proxy if the request cannot be resolved. e.g.: http://someurl.com',
    '',
    '  --username   Username for basic authentication [none]',
    '               Can also be specified with the env variable NODE_HTTP_SERVER_USERNAME',
    '  --password   Password for basic authentication [none]',
    '               Can also be specified with the env variable NODE_HTTP_SERVER_PASSWORD',
    '',
    '  -S --ssl     Enable https.',
    '  -C --cert    Path to ssl cert file (default: cert.pem).',
    '  -K --key     Path to ssl key file (default: key.pem).',
    '',
    '  -r --robots        Respond to /robots.txt [User-agent: *\\nDisallow: /]',
    '  --no-dotfiles      Do not show dotfiles',
    '  -h --help          Print this list and exit.',
    '  -v --version       Print the version and exit.'
  ].join('\n'));
  process.exit();
}

if(argv.v || argv.version) {
  console.log(version);
  process.exit();
}

commander
  .option('-p,--port [value]', 'config port') // 配置端口
  .option('-o,--host [value]', 'config hostname') // 配置主机名
  .option('-P,--proxyUrl [value]', 'config proxy') // 配置转发地址
  .parse(process.argv);

const server = new Server(commander);
server.start();