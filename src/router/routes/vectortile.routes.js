const tileController = require('../../controllers/tile.controller')

module.exports = (app) => {
  app.get('/tiles/:source/:z/:x/:y.pbf', tileController.getTile)
}
