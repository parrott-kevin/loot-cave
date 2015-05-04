(function() {
  'use strict';

  angular
    .module('user.controller', ['ui.bootstrap'])
    .controller('UserController', UserController);

  UserController.$inject = ['fetchAccount'];

  function UserController(fetchAccount) {
    var vm = this;
    vm.bungie = 'https://www.bungie.net';
    vm.user = {
      platform: 1
    };

    vm.getAccount = function(user) {
      fetchAccount.get(user).then(function (d) {
        console.log(d.data);
        vm.characters = d.data.data.characters;
      });
    };

    //todo: hash lookup in a service

  }
})();
