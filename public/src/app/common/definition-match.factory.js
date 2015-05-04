(function() {
  'use strict';

  angular
    .module('definition-match.factory', [])
    .factory('definitionMatch', definitionMatch);

  definitionMatch.$inject = ['_'];

  function definitionMatch(_) {
    var hashToDef = {
      bucketHash: 'buckets',
      itemHash: 'items'
    };

    return {
      get: get
    };

    function get(key, hash, definitions) {
      return _.get(definitions, [hashToDef[key], hash]);
    }

  }
})();
