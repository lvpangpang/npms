const open = require('open')
const ip = require('ip')
const { success } = require('./info.js');

function openBrowser(port) {
  const localIp = ip.address();
  success(`以下地址可打开页面
    http://localhost:${port}
        
    http://${localIp}:${port}
  `);
  open(`http://${localIp}:${port}`);
}

module.exports = openBrowser
