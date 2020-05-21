var fs = require('fs');

module.exports = function() {
  if (fs.existsSync(`${process.cwd()}/bsv.js`)) {
    return Object.assign({}, require(`${process.cwd()}/bsv.js`))
  } else {
    return {};
  }
}