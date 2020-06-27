const http = require('http');
const path = require('path');
const fs = require('fs');

const util = require('util');
const chalk = require('chalk');
const url = require('url');
const pug = require('pug');
const mime = require('mime');
const proxy = require('proxy');
const iconv = require('iconv-lite');
const ip = require('ip');
const zlib = require('zlib');

const config = require('./config');
const stat = util.promisify(fs.stat);
const readdir = util.promisify(fs.readdir);
const template = fs.readFileSync(path.join(__dirname, 'template.pug'), 'utf8')

class Server {
  constructor(command) {
    this.config = {
      ...config,
      ...command
    };
    console.log(command);
    this.template = template;
  }

  // 处理请求入口
  async handleRequest(req, res) {
    const { dir, proxyUrl } = this.config;
    let { pathname } = url.parse(req.url);
    pathname = decodeURIComponent(pathname);
    let p = path.join(dir, pathname);
    try {
      let statObj = await stat(p);
      // 文件夹处理
      if(statObj.isDirectory()) {
        res.setHeader('Conent-Type', 'text/html;charset=utf8');
        let dirs = await readdir(p);
        dirs = dirs.map((item) => {
          let statItem = fs.statSync(path.join(dir, pathname, item));
          return ({
            name: item,
            size: !statItem.isDirectory() ? (statItem.size / 1024).toFixed(2) + 'kb' : '',
            href: path.join(pathname, item)
          });
        });
        let str = pug.render(this.template, {
          url: pathname,
          arr: dirs
        });
        res.end(str);
      } else {
        // 文件处理
        this.sendFile(req, res, statObj, p);
      }
    } catch(err) {
      if(proxyUrl) {
        this.proxy(req, res, proxyUrl);
      } else {
        this.sendError(res, err);
      }
    }
  }

  sendFile(req, res, statObj, p) {
    res.setHeader('Conetent-Type', mime.getType(p) + '; charset=UTF-8')
     // 如果是需要压缩则定义gzip转化流，讲文件压缩后输出
     let transform = this.gzip(req, res, statObj, p);
     if (transform) {
        return fs.createReadStream(p).pipe(transform).pipe(res);
     }
    fs.createReadStream(p).pipe(res);
  }

  gzip(req, res, statObj, p) {
    let encoding = req.headers['accept-encoding'];
    if(encoding) {
      if(encoding.match(/bgzip\b/)) {
        res.setHeader('Content-Encoding', 'gzip');
        return zlib.createGzip();
      }
      if (encoding.match(/\bdeflate\b/)) {
        res.setHeader('Content-Encoding', 'deflate');
        return zlib.createDeflate();
      }
      return false;
    } else {
      return false;
    }
  }

  proxy(req, res, proxyUrl) {
    delete req.headers.host;
    const proxy = httpProxy.createProxyServer({});
    proxy.web(req, res, {
      target: proxyUrl
    });
  }

  sendError(res, err) {
    console.log(err);
    res.end(`Error`);
  }

  // 启动
  start() {
    const server = http.createServer(this.handleRequest.bind(this));
    server.listen(this.config.port, () => {
      console.log(chalk.yellow('Starting up http-server-bsv, serving ./'));
      console.log(chalk.yellow('Available on:'));
      console.log(`    http://${ip.address()}:${chalk.green(this.config.port)}`);
    });
  }
}

module.exports = Server;