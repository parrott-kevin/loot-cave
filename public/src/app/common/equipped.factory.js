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
    //  return build(items, definitions);
    //}
    //
    //function build(items, definitions) {
      var equippedItems = {};
      // match items to those wanted
      items.forEach(function(item) {
        item = definitionMatch.get(item, definitions);
        item.items[0].isCollapsed = true;
        var bucket = item.bucketDefinition.bucketIdentifier;
        switch (bucket) {
          case 'BUCKET_BUILD':
            equippedItems.subClass = item;
            break;
          case 'BUCKET_PRIMARY_WEAPON':
            equippedItems.primary = item; // build(item.items[0], definitions);
            break;
          case 'BUCKET_SPECIAL_WEAPON':
            equippedItems.special = item;
            break;
          case 'BUCKET_HEAVY_WEAPON':
            equippedItems.heavy = item;
            break;
          case 'BUCKET_HEAD':
            equippedItems.head = item;
            break;
          case'BUCKET_ARMS':
            equippedItems.arms = item;
            break;
          case 'BUCKET_CHEST':
            equippedItems.chest = item;
            break;
          case 'BUCKET_LEGS':
            equippedItems.legs = item;
            break;
          case 'BUCKET_CLASS_ITEMS':
            equippedItems.classItem = item;
            break;
          case 'BUCKET_GHOST':
            equippedItems.ghost = item;
            break;
          case 'BUCKET_VEHICLE':
            equippedItems.vehicle = item;
            break;
          case 'BUCKET_SHIP':
            equippedItems.ship = item;
            break;
          case 'BUCKET_SHADER':
            equippedItems.shader = item;
            break;
          case 'BUCKET_EMBLEM':
            equippedItems.emblem = item;
            break;
        }
      });

      _.keysIn(equippedItems).forEach(function(item) {
        if (item === 'subClass') {
          equippedItems[item] = definitionMatch.get(equippedItems[item].items[0], definitions);
        } else {
            equippedItems[item] = build(equippedItems[item].items[0], definitions);
        }
        equippedItems[item].isCollapsed = true;
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
