(function() {
  'use strict';

  angular
    .module('account.controller', ['ui.bootstrap'])
    .controller('AccountController', AccountController);

  AccountController.$inject = ['accountResolver', 'equipped'];
  function AccountController(accountResolver, equipped) {
    var vm = this;
    vm.bungie = 'https://www.bungie.net';
    vm.characters = accountResolver.data.characters;
    vm.characters.forEach(function(character) {
      var equipment = character.characterBase.inventory.data.buckets.Equippable;
      var definitions = character.characterBase.inventory.definitions;
      character.characterBase.inventory = equipped.get(equipment, definitions);
    });

    vm.itemOrder = ['subClass', 'primary', 'special', 'heavy', 'head', 'arms', 'chest', 'legs', 'classItem'];
    console.log(vm.characters);

  }
})();
