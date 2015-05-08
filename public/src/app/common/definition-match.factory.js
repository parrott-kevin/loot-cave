(function() {
  'use strict';

  angular
    .module('definition-match.factory', [])
    .factory('definitionMatch', definitionMatch);

  definitionMatch.$inject = ['_'];

  function definitionMatch(_) {
    //var hashToDef = {
    //  bucketHash: 'buckets',
    //  flagHash: 'flags',
    //  itemHash: 'items',
    //  perkHash: 'perks',
    //  talentGridHash: 'talentGrids'
    //};

    return {
      get: get
    };

    function get(obj, definitions) {

      hashes(obj).forEach(function(val) {
        obj[val.itemDefKey] = _.get(definitions, [val.hashDefKey, val.hashValue]);
      });

      return obj;

      //var hashDef = objHashes.map(function(val) {
      //  return val.slice(0, -4) + 's';
      //});
      //var keys = _.intersection(hashDef, _.keysIn(definitions));
      //
      //
      //keys.forEach(function(val) {
      //  var key = val.slice(0, -1) + 'Definition';
      //  console.log(val);
      //  obj[key] = definitions[val];
      //});
      //console.log(obj);

      //return _.get(definitions, [hashToDef[key], obj[key]]);
    }

    function hashes(obj) {
      var hash = [];
      _.keysIn(obj).forEach(function(val) {
        if (_.endsWith(val, 'Hash')) {
          hash.push(val);
        }
      });

      return hash.map(function(val) {
        return {
          hash: val,
          hashValue: obj[val],
          hashDefKey: val.slice(0, -4) + 's',
          itemDefKey: val.slice(0, -4) + 'Definition'
        };
      });

    }


  }
})();
