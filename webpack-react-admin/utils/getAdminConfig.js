const fs = require('fs')

function getAdminConfig() {
  const cwd = process.cwd()
  if (fs.existsSync(`${cwd}/admin.config.js`)) {
    return Object.assign({}, require(`${cwd}/admin.config.js`))
  } else {
    return {}
  }
}

module.exports = getAdminConfig()
