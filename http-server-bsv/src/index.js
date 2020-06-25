const http = require('http');
const path = require('path');
const fs = require('fs');

const util = require('util');
const chalk = require('chalk');
const url = require('url');
const pug = require('pug');
const mime = require('mime');

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
    this.template = template;
  }

  // 处理请求入口
  async handleRequest(req, res) {
    const { dir } = this.config;
    let { pathname } = url.parse(req.url);
    pathname = decodeURIComponent(pathname);
    let p = path.join(dir, pathname);
    try {
      let statObj = await stat(p);
      if(statObj.isDirectory()) {
        res.setHeader('Conent-Type', 'text/html;charset=utf8');
        let dirs = await readdir(p);
        dirs = dirs.map((item) => ({
          name: item,
          href: path.join(pathname, item)
        }));
        let str = pug.render(this.template, {
          arr: dirs
        });
        res.end(str);
      } else {
        this.sendFile(req, res, statObj, p);
      }
    } catch(e) {
      this.sendError(req, res);
    }
  }

  sendFile(req, res, statObj, p)  {
    res.setHeader('Conetent-Type', mime.getType(p) + ';charset=utf8');
    fs.createReadStream(p).pipe(res);
  }

  sendError(req, res){
    res.end(`Error`);
  }

  // 启动
  start() {
    const server = http.createServer(this.handleRequest.bind(this));
    server.listen(this.config.port, this.config.host, () => {
      console.log(`server start http://${this.config.host}:${chalk.green(this.config.port)}`);
    });
  }
}

module.exports = Server;