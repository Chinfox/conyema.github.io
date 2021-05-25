const cors = require("cors");
const express = require("express");
const dotenv = require('dotenv');
const debug = require('debug')('app:server');
const logger = require("morgan");
const compression = require("compression");
const path = require('path');

// const api = require("./api");
// const dashboard = require("./dashboard");
const web = require("./web");

const errorHandler = require("./util/errorHandler");

// environment configuration
dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

// app.use(express.static('web'));
app.use(compression());
app.use(express.static(path.join(__dirname, 'web/src/')));

// middlewares for development and production env.
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// sub-apps and routes
app.use('/', web);
// app.use('/api/v1', api);

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '/web/src/index.html'));
// });
// app.get('*', (req, res) => {
//   res.json({ message: 'Welcome to the SEC!!!' });
// });
 
// default error handler
app.use(errorHandler);

// start app server
app.listen(port, () => {
  debug(`App running on port ${port}.`);
});

module.exports = app;
