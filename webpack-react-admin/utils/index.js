var fs = require('fs');
module.exports = function() {
  const cwd = process.cwd();
  if (fs.existsSync(`${cwd}/admin.config.js`)) {
    return Object.assign({}, require(`${cwd}/admin.config.js`))
  } else {
    return {};
  }
}