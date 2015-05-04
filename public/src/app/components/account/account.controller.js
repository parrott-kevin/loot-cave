(function() {
  'use strict';

  angular
    .module('account.controller', [])
    .controller('AccountController', AccountController);

  AccountController.$inject = ['accountResolver'];
  function AccountController(accountResolver) {
    var vm = this;
    vm.bungie = 'https://www.bungie.net';
    vm.characters = accountResolver.data.characters;
    console.log(accountResolver);
    console.log(vm.characters);
  }
})();
