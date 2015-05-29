(function() {
  'use strict';

  angular
    .module('equipped.factory', [])
    .factory('equipped', equipped);

  equipped.$inject = ['definitionMatch', '_'];
  function equipped(definitionMatch, _) {
    return {
      get: get
    };

    function get(items, definitions) {
      var equippedItems = {
        subClass: [],
        weapons: [],
        armor: [],
        misc: []
      };

      var itemOrderWeapons = [
        'BUCKET_PRIMARY_WEAPON',
        'BUCKET_SPECIAL_WEAPON',
        'BUCKET_HEAVY_WEAPON'
      ];

      var itemOrderArmor = [
        'BUCKET_HEAD',
        'BUCKET_ARMS',
        'BUCKET_CHEST',
        'BUCKET_LEGS'
      ];

      var itemOrderMisc = [
        'BUCKET_CLASS_ITEMS',
        'BUCKET_GHOST',
        'BUCKET_VEHICLE',
        'BUCKET_SHIP',
        'BUCKET_SHADER',
        'BUCKET_EMBLEM'
      ];

      items.forEach(function(item) {
        item = definitionMatch.get(item, definitions);
        var bucket = item.bucketHashDefinition.bucketIdentifier;
        var itemDef = {};
        if (bucket === 'BUCKET_BUILD') {
          itemDef = definitionMatch.get(item.items[0], definitions);
        } else {
          if (!_.isUndefined(item.items[0])) {
            itemDef = build(item.items[0], definitions);
          }
        }

        if (!_.isEmpty(itemDef)) {
          itemDef.bucket = bucket;
          itemDef.isCollapsed = true;
          if (bucket === 'BUCKET_BUILD') {
            equippedItems.subClass.push(itemDef);
          } else if (_.includes(itemOrderWeapons, bucket)) {
            equippedItems.weapons.push(itemDef);
          } else if (_.includes(itemOrderArmor, bucket)) {
            equippedItems.armor.push(itemDef);
          } else if (_.includes(itemOrderMisc, bucket)) {
            equippedItems.misc.push(itemDef);
          }
        }

      });

      return equippedItems;
    }

    function build(item, definitions) {
      item = definitionMatch.get(item, definitions);
      item.perks.forEach(function(perk) {
        perk = definitionMatch.get(perk, definitions);
      });

      item.stats.forEach(function(stat) {
        stat = definitionMatch.get(stat, definitions);
      });

      item.primaryStat = definitionMatch.get(item.primaryStat, definitions);

      return item;
    }

  }
})();
