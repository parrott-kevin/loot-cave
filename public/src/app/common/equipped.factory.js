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
      var equippedItems = [];
      // match items to those wanted
      items.forEach(function(item) {
        item = definitionMatch.get(item, definitions);
        var bucket = item.bucketDefinition.bucketIdentifier;
        var itemDef = {};
        if (bucket === 'BUCKET_BUILD') {
          itemDef = definitionMatch.get(item.items[0], definitions);
        } else {
          itemDef = build(item.items[0], definitions);
        }
        itemDef.bucket = bucket;
        itemDef.isCollapsed = true;
        equippedItems.push(itemDef);
      });
      var itemOrder = [
        'BUCKET_BUILD',
        'BUCKET_PRIMARY_WEAPON',
        'BUCKET_SPECIAL_WEAPON',
        'BUCKET_HEAVY_WEAPON',
        'BUCKET_HEAD',
        'BUCKET_ARMS',
        'BUCKET_CHEST',
        'BUCKET_LEGS',
        'BUCKET_CLASS_ITEMS',
        'BUCKET_GHOST',
        'BUCKET_VEHICLE',
        'BUCKET_SHIP',
        'BUCKET_SHADER',
        'BUCKET_EMBLEM'
      ];

      equippedItems = _.sortBy(equippedItems, function(item) {
        return itemOrder.indexOf(item.bucket);
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
