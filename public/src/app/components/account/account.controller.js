(function() {
  'use strict';

  angular
    .module('account.controller', ['ui.bootstrap'])
    .controller('AccountController', AccountController);

  AccountController.$inject = ['accountResolver', 'equipped', 'definitionMatch'];
  function AccountController(accountResolver, equipped, definitionMatch) {
    var vm = this;
    vm.bungie = 'https://www.bungie.net';
    vm.characters = accountResolver.data.characters;
    vm.characters.forEach(function(character) {
      character.characterBase = definitionMatch.get(character.characterBase, accountResolver.definitions);
      var equipment = character.characterBase.inventory.data.buckets.Equippable;
      var definitions = character.characterBase.inventory.definitions;
      character.characterBase.inventory = equipped.get(equipment, definitions);
    });

    console.log(vm.characters);

  }
})();
