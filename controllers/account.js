'use strict';

var async = require('async');
var request = require('request');
var bungieEndpoints = require('../services/bungieEndpoints');

var account = {
  get: function(req, res) {
    var membershipType = req.query.platform;
    var displayName = req.query.name;
    async.waterfall([
      function(callback) {
        var endpoint = bungieEndpoints.searchDestinyPlayer(membershipType, displayName);
        request(endpoint, function(error, response, body) {
          body = JSON.parse(body);
          if (body.ErrorCode === 1 && response.statusCode === 200) {
            var membershipId = body.Response[0].membershipId;
            callback(null, membershipId);
          } else {
            res.send([response, body.ErrorCode, body.Message]);
          }
        });
      },
      function(membershipId, callback) {
        var endpoint = bungieEndpoints.getAccount(membershipType, membershipId, true);
        request(endpoint, function(error, response, body) {
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
          var endpoint = bungieEndpoints.getCharacterInventory(membershipType, membershipId, characterId, true);
          request(endpoint, function (error, response, body) {
            characterInventory[characterId] = JSON.parse(body).Response;
            cb();
          });
        }, function() {
          callback(null, accountInfo, characterInventory);
        });
      }
    ], function(err, accountInfo, characterInventory) {
      accountInfo.data.characters.map(function(val) {
        val.characterBase.inventory = characterInventory[val.characterBase.characterId];
      });

      res.send(accountInfo);
    });
  }
};

module.exports = account;
