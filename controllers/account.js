'use strict';

var async = require('async');
var request = require('request');
var bungieEndpoints = require('../services/bungieEndpoints');

var account = {
  get: function(req, res) {
    var bungieUrl = 'https://www.bungie.net/Platform/Destiny';
    var membershipType = req.query.platform;
    var displayName = req.query.name;
    async.waterfall([
      function(callback) {
        var endpoint = bungieEndpoints.searchDestinyPlayer(membershipType, displayName);
        request(endpoint, function(error, response, body) {
          var membershipId = JSON.parse(body).Response[0].membershipId;
          callback(null, membershipId);
        });
      },
      function(membershipId, callback) {
        var endpoint = '/' + membershipType + '/Account/' + membershipId + '/?definitions=true';
        request(bungieUrl + endpoint, function(error, response, body) {
          body = JSON.parse(body).Response;
          var accountInfo = {
            data: body.data,
            definitions: body.definitions
          };
          var characterIdArray = accountInfo.data.characters;
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
      var data = {
        accountInfo: accountInfo,
        characterInventory: characterInventory
      };
      res.send(data);
    });
  }
};

module.exports = account;
