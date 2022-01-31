const cors = require("cors");
const express = require("express");
const dotenv = require('dotenv');
const debug = require('debug')('app:server');
const logger = require("morgan");
const compression = require("compression");
const path = require('path');

const errorHandler = require("./util/errorHandler");

// environment configuration
dotenv.config();
const port = process.env.PORT || 4000;

const app = express();

// app.use(express.static('web'));
app.use(compression());
app.use(express.static(path.join(__dirname, 'web/src'), { extensions: ['html'] }));


// middlewares for production env.
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);


// routes
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
