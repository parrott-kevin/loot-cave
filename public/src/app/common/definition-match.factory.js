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
        if (_.endsWith(val, 'Hash') && _.includes(defKeys, val.slice(0, -4) + 's')) {
          hash.push(
            {
              hash: val,
              hashValue: obj[val],
              hashDefKey: val.slice(0, -4) + 's',
              itemDefKey: val.slice(0, -4) + 'Definition'
            }
          );
        }
      });
      return hash;
    }


  }
})();
