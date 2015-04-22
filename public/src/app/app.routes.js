(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  routeConfig.$inject = ['$routeProvider'];
  function routeConfig($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'app/components/user/user.html',
        controller: 'UserController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirect: '/home'
      });
  }
})();
