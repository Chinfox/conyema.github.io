const cors = require("cors");
const express = require("express");
const dotenv = require('dotenv');
const debug = require('debug')('app:server');
const logger = require("morgan");
const path = require('path');

const errorHandler = require("./util/errorHandler");
const siteData = require('./data.js');

// environment configuration
dotenv.config();
const port = process.env.PORT || 4000;

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'web/views/pages'));
app.set('view engine', 'pug');

// middlewares for development env.
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static(path.join(__dirname, 'web/src')));


// routes
app.get('/', (req, res) => {
  res.render('index', { ...siteData });
});

app.post('/message', (req, res) => {
  const { name } = req.body;

  res.status(200);
  res.json({
    status: "success",
    data: {
      sender: name
    },
  });
});

app.get('*', (req, res) => {
  res.redirect('/');
});

// default error handler
app.use(errorHandler);

// start app server
app.listen(port, () => {
  debug(`App running on port ${port}.`);
});

module.exports = app;
