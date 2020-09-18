const log4js = require('log4js');

module.exports = {
  begin (app) {
    log4js.configure({
      appenders: {
          console: { type: 'console' },
      },
      categories: {
        default: { appenders: ['console'], level: 'ALL' }
      }
    });
    let logger = log4js.getLogger('tileserver');
    app.use(log4js.connectLogger(logger, {level: 'auto'}));
  }
}