(function() {
  'use strict';

  angular
    .module('definition-match.factory', [])
    .factory('definitionMatch', definitionMatch);

  definitionMatch.$inject = ['_'];

  function definitionMatch(_) {

    return {
      get: get
    };

    function get(obj, definitions) {
      hashes(obj, _.keysIn(definitions)).forEach(function(val) {
        obj[val.itemDefKey] = _.get(definitions, [val.hashDefKey, val.hashValue]);
      });

      return obj;
    }

    function hashes(obj, defKeys) {
      var hash = [];
      _.keysIn(obj).forEach(function(val) {
        if (_.endsWith(val, 'Hash') && _.includes(defKeys, hashDefKey(val))) {
          hash.push(
            {
              hash: val,
              hashValue: obj[val],
              hashDefKey: hashDefKey(val),
              itemDefKey: val.slice(0, -4) + 'Definition'
            }
          );
        }
      });
      return hash;
    }

    function hashDefKey (val) {
      var plural = 's';
      if (val === 'classHash') {
        plural = 'es';
      }
      return val.slice(0, -4) + plural;
    }


  }
})();
