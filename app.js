'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var routes = require('./config/routes');

var app = express();

// Enable CORS
app.use(function(req, res, next) {
  res.set({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    });
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', express.static(path.join(__dirname, 'public/dist')));

app.use('/api', routes);

module.exports = app;
