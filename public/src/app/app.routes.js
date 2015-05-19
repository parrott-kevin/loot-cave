(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  routeConfig.$inject = ['$routeProvider'];
  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/components/search/search.html',
        controller: 'SearchController',
        controllerAs: 'vm'
      })
      .when('/home', {
        templateUrl: 'app/components/search/search.html',
        controller: 'SearchController',
        controllerAs: 'vm'
      })
      .when('/account/:platform/:name', {
        templateUrl: 'app/components/account/account.html',
        controller: 'AccountController',
        controllerAs: 'vm',
        resolve: {
          accountResolver: accountResolver
        }
      })
      .otherwise({
        redirect: '/home'
      });
  }

  accountResolver.$inject = ['$route', 'fetchAccount'];
  function accountResolver($route, fetchAccount) {
    var platform = $route.current.params.platform;
    var name = $route.current.params.name;
    return fetchAccount.get(platform, name).then(function (d) {
      return d.data;
    });
  }
})();
