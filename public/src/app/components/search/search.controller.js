(function() {
  'use strict';

  angular
    .module('search.controller', ['ui.bootstrap'])
    .controller('SearchController', SearchController);

  SearchController.$inject = ['$location'];

  function SearchController($location) {
    var vm = this;
    vm.user = {
      platform: 1
    };

    vm.getAccount = function(user) {
      $location.path('/account/' + user.platform + '/' + user.name);
    };

    //todo: hash lookup in a service

  }
})();
