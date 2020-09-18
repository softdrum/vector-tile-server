const fs = require('fs').promises;
const path = require('path');
const appDir = path.dirname(require.main.filename);
const stylesPath = appDir + '/public/styles/';
const mbtilesPath = appDir + '/tiles/'
const config = require('../../config')
const baseURL = `http://${config.host}:${config.port}`
module.exports = {
    async setStylesURL () {
      let mbtiles = (await fs.readdir(mbtilesPath)).map(file => file.replace('.mbtiles', ''));
      let styles = await fs.readdir(stylesPath)
      styles.forEach(async (folder) => {
        let filepath = `${stylesPath}${folder}/style.json`
        let styleJSON = await fs.readFile(filepath);
        let styleObj = JSON.parse(styleJSON);
        styleObj.sources.openmaptiles.tiles = mbtiles.map(tile => {
          return `${baseURL}/tiles/${tile}/{z}/{x}/{y}.pbf` 
        })
        styleObj.sprite = `${baseURL}/static/sprites/basic-v9`;
        styleObj.glyphs = `${baseURL}/static/fonts/{fontstack}/{range}.pbf`;
        styleJSON = JSON.stringify(styleObj);
        await fs.writeFile(filepath, styleJSON)
      })
      // fs.readdirSync(stylesPath).forEach(async (folder) => {
      //   let filepath = `${stylesPath}${folder}/style.json`
      //   let json = await fs.promises.readFile(filepath, 'utf-8');
      //   let style = JSON.parse(json);
      //   style.sources.tiles[0] = `${baseURL}/tiles` 
      // })
    }
}