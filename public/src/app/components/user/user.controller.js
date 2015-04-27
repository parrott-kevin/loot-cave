(function() {
  'use strict';

  angular
    .module('user.controller', ['ui.bootstrap'])
    .controller('UserController', UserController);

  UserController.$inject = ['$http'];

  function UserController($http) {
    var vm = this;
    vm.bungie = 'https://www.bungie.net';
    vm.user = {
      platform: 1
    };

    vm.getUser = function() {
      $http.get('/api/searchDestinyPlayer', {
        params: {
          platform: vm.user.platform,
          name: vm.user.name
        }
      }).success(function(d){
        console.log(d);
        vm.characters = d[0].characters;
      });
    };
  }
})();
