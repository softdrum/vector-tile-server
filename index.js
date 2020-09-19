const app = require('./src/app');
const config = require('./config');
const PORT = config.port;
const logger = require('./src/utils/logger')
const setStylesURL = require('./src/utils/style.util').setStylesURL;
const myLogger = logger.begin(app, config.logLevel);


setStylesURL().then(() => {
  // Starts up the server on port 3000
  app.listen(PORT, () => {
    // console.log(`Serving tiles on port ${PORT}`);
    myLogger.info(`Serving tiles on port ${PORT}`);
  });
})