const MBTiles = require('@mapbox/mbtiles');
const p = require("path");
const appDir = p.dirname(require.main.filename);
// set correct mime type/content encoding
const header = {
  "Content-Type":"application/x-protobuf",
  "Content-Encoding":"gzip"
};
var counter = 0
module.exports = {
  getTile (req, res) {
    console.log('tile');
    let source = req.params.source + '.mbtiles';
    let tilepath = p.join(appDir, '/tiles/' + source);
    new MBTiles(tilepath, function(err, mbtiles) {
      mbtiles.getTile(req.params.z, req.params.x, req.params.y, function(err, tile, headers) {
        if (err) {
          res.set({"Content-Type": "text/plain"});
          res.status(404).send('Tile rendering error: ' + err + '\n');
          console.log('error');

        } else {
          res.set(header);
          console.log('success');
          res.send(tile);
        }
      });
      if (err) console.log("error opening database");
    });
  }
}