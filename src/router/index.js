const fs = require('fs')
const path = require('path');
const routesPath = __dirname + '/routes/';
/**
 * Automatically adds all routes in ./routes folder
 * @param {*} app 
 * @param {*} express 
 */
module.exports = (app) => {
  // fix 404 error on GET /favicon.ico
  app.get('/favicon.ico', (req, res) => res.status(204));

  fs.readdirSync(routesPath)
    .filter((file) => file !== 'index.js')
    .forEach((file) => {
      require(path.join(routesPath, file))(app)
  })
}
