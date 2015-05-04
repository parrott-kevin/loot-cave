(function() {
  'use strict';

  angular
    .module('account.controller', [])
    .controller('AccountController', AccountController);

  AccountController.$inject = ['accountResolver', 'definitionMatch', '_'];
  function AccountController(accountResolver, definitionMatch, _) {
    var vm = this;
    vm.bungie = 'https://www.bungie.net';
    vm.characters = accountResolver.data.characters;

    console.log(accountResolver);

    vm.getIcon = function(key, hash, definitions) {
      var def = definitionMatch.get(key, hash, definitions);
      return vm.bungie + def.icon;
    };

    //todo: add watcher to $routeChangeStart and $routeChangeSuccess so that loading icon appears until resolvers are finished.
    //$scope.$on('$routeChangeStart', function() {
    //  console.log('start');
    //});
    //$scope.$on('$routeChangeSuccess', function() {
    //  console.log('success');
    //});
  }
})();
