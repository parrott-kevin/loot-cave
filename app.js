'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var request = require('request');
var async = require('async');
//var routes = require('./config/routes');

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

app.get('/api/searchDestinyPlayer', function(req, res) {

  var bungieUrl = 'https://www.bungie.net/Platform/Destiny';
  var membershipType = req.query.platform;
  var displayName = req.query.name;
  async.waterfall([
    function(callback) {
      var endpoint = '/SearchDestinyPlayer/' + membershipType + '/' + displayName;
      request(bungieUrl + endpoint, function(error, response, body) {
        var membershipId = JSON.parse(body).Response[0].membershipId;
        callback(null, membershipId);
      });
    },
    function(membershipId, callback) {
      var endpoint = '/' + membershipType + '/Account/' + membershipId;
      request(bungieUrl + endpoint, function(error, response, body) {
        var accountInfo = JSON.parse(body).Response.data;
        var characterIdArray = accountInfo.characters;
        callback(null, membershipId, accountInfo, characterIdArray);
      });
    },
    function(membershipId, accountInfo, characterIdArray, callback) {
      var characterInventory = {};
      async.each(characterIdArray, function(character, cb) {
        var characterId = character.characterBase.characterId;
        var endPoint = '/' + membershipType + '/Account/' + membershipId + '/character/' + characterId + '/inventory';
        request(bungieUrl + endPoint, function (error, response, body) {
          characterInventory[characterId] = JSON.parse(body).Response.data;
          cb();
        });
      }, function() {
          callback(null, accountInfo, characterInventory);
      });
    }
  ], function(err, accountInfo, characterInventory) {
    res.send([accountInfo, characterInventory]);
  });

});

//app.use('/api', routes);

module.exports = app;
