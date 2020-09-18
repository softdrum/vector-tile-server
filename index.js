const app = require('./src/app');
const config = require('./config');
const PORT = config.port;


// Starts up the server on port 3000
app.listen(PORT, () => {
  console.log(`Serving tiles on port ${PORT}`);
});