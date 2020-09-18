/** Initialize express app */
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({origin: '*'}));

require('./router')(app, express) // adding routes
app.use('/static', express.static('public'))


module.exports = app
