(function() {
  'use strict';

  angular
    .module('user.controller', [])
    .controller('UserController', UserController);

  UserController.$inject = ['$http'];

  function UserController($http) {
    var vm = this;

    vm.getUser = function(name) {
      $http.get('https://www.bungie.net/Platform/Destiny/SearchDestinyPlayer/1/' + name).success(function(d){
        console.log(d);
      });
    };
  }
})();
