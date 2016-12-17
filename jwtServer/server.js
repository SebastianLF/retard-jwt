const debug = require('debug')('app:server');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./config');
const routes = require('./routes');

// ========================================================
// Initilization
// ========================================================
debug('Initialization...');

const port = config.port;
const app = express();

// ------------------------------------
// Middlewares
// ------------------------------------
// Body parser
app.use(bodyParser.urlencoded({ extended: false }));

// Enabling request from any endpoint
app.use(cors());

// Configuring routes
app.use(routes());

// ========================================================
// Server starting
// ========================================================
app.listen(port, () => {
  debug(`Server is listenning at port ${port}:`);
});
