const fs = require('fs')
const path = require('path')
const routesPath = __dirname + '/routes/'
console.log(routesPath);
/**
 * Automatically adds all routes in ./routes folder
 * @param {*} app 
 * @param {*} express 
 */
module.exports = (app, express) => {
  fs.readdirSync(routesPath)
    .filter((file) => file !== 'index.js')
    .forEach((file) => {
      require(path.join(routesPath, file))(app)
  })
}
