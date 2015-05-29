(function() {
  'use strict';

  angular
    .module('account.controller', ['ui.bootstrap'])
    .controller('AccountController', AccountController);

  AccountController.$inject = ['accountResolver', 'equipped', 'definitionMatch', '_'];
  function AccountController(accountResolver, equipped, definitionMatch, _) {
    var vm = this;
    vm.account = _.omit(accountResolver.data, 'characters');
    vm.account.inventory.currencies[0] = definitionMatch.get(vm.account.inventory.currencies[0], accountResolver.definitions);
    vm.bungie = 'https://www.bungie.net';
    vm.characters = accountResolver.data.characters;
    vm.characters.forEach(function(character) {
      character.characterBase = definitionMatch.get(character.characterBase, accountResolver.definitions);
      var equipment = character.characterBase.inventory.data.buckets.Equippable;
      var definitions = character.characterBase.inventory.definitions;
      character.characterBase.inventory = equipped.get(equipment, definitions);
    });

    //console.log(vm.account);
    console.log(vm.characters);

  }
})();
