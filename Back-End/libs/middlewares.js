var bodyParser = require('body-parser');
var express = require('express');
var morgan = require('morgan');
var cors = require('cors');
var compression = require('compression');
var helmet = require('helmet');
var logger = require('./logger.js');
var cookieParser = require('cookie-parser')



module.exports = app => {
  app.set("port", process.env.PORT || 3000);
  app.set("json spaces", 4);
  app.use(morgan("common", {
    stream: {
      write: (message) => {
        logger.info(message);
      }
    }
  }));
  app.use(helmet());
  app.use(cors({
    origin: ["http://localhost"],// web
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  }));
  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(app.auth.initialize());
  app.use((req, res, next) => {
    delete req.body.id;
    next();
  });
  app.use(express.static("public"));
};
