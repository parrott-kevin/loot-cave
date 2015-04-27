'use strict';

var bungieUrl = 'https://www.bungie.net/Platform/Destiny';
var endpoints = {
  searchDestinyPlayer: function(membershipType, displayName) {
    var slugs = [bungieUrl, 'SearchDestinyPlayer', membershipType, displayName];
    var endpoint = slugs.reduce(function(previousValue, currentValue) {
      return previousValue + '/' + currentValue;
    });
    return endpoint;
  }
};

module.exports = endpoints;
