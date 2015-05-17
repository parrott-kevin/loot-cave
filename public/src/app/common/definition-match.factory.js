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

      var hashDefinitions = [
        {
          hash: 'bucketHash',
          def: 'buckets'
        },
        {
          hash: 'buildStatGroupHash',
          def: 'statGroups'
        },
        {
          hash: 'classHash',
          def: 'classes'
        },
        {
          hash: 'genderHash',
          def: 'genders'
        },
        {
          hash: 'itemHash',
          def: 'items'
        },
        {
          hash: 'perkHash',
          def: 'perks'
        },
        {
          hash: 'progressionHash',
          def: 'progressions'
        },
        {
          hash: 'raceHash',
          def: 'races'
        },
        {
          hash: 'statGroupHash',
          def: 'statGroups'
        },
        {
          hash: 'statHash',
          def: 'stats'
        },

        {
          hash: 'talentGridHash',
          def: 'talentGrids'
        }
      ];

      var objKeys = _.keysIn(obj);
      objKeys.forEach(function(val) {
        var mapping = _.find(hashDefinitions, {hash: val});
        if (mapping) {
          obj[val + 'Definition'] = _.get(definitions, [mapping.def, obj[val]]);
        }
      });
      return obj;
    }


  }
})();
