'use strict';

var bungieUrl = 'https://www.bungie.net/Platform/Destiny';
var endpoints = {
  searchDestinyPlayer: function(membershipType, displayName) {
    var parts = [bungieUrl, 'SearchDestinyPlayer', membershipType, displayName];
    return assembleUrl(parts);
  },
  getAccount: function(membershipType, membershipId, definitions) {
    var parts = [bungieUrl, membershipType, 'Account', membershipId];
    return assembleUrl(parts, definitions);
  },
  getCharacterInventory: function(membershipType, membershipId, characterId, definitions) {
    var parts = [bungieUrl, membershipType, 'Account', membershipId, 'Character', characterId, 'Inventory'];
    return assembleUrl(parts, definitions);
  }
};

function assembleUrl(parts, definitions) {
  var endpoint = parts.reduce(function(previousValue, currentValue) {
    return previousValue + '/' + currentValue;
  });
  if (definitions) {
    endpoint += '/?definitions=true';
  }
  return endpoint;
}

module.exports = endpoints;
