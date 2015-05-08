(function() {
  'use strict';

  angular
    .module('account.controller', ['ui.bootstrap'])
    .controller('AccountController', AccountController);

  AccountController.$inject = ['accountResolver', 'definitionMatch', 'equipped'];
  function AccountController(accountResolver, definitionMatch, equipped) {
    var vm = this;
    vm.bungie = 'https://www.bungie.net';
    vm.characters = accountResolver.data.characters;
    vm.equipped = {};
    vm.characters.forEach(function(character) {
      var id = character.characterBase.characterId;
      var equipment = character.characterBase.inventory.data.buckets.Equippable;
      vm.equipped[id] = equipment;
      vm.equipped[id].forEach(function(item) {
        //item.items[0].itemDefinition = definitionMatch.get(item.items[0], 'itemHash', character.characterBase.inventory.definitions);
        item.items[0] = definitionMatch.get(item.items[0], character.characterBase.inventory.definitions);
        item.isCollapsed = true;
      });
    });
    console.log(vm.equipped);
    console.log(vm.characters);

  }
})();
