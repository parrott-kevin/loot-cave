(function() {
  'use strict';

  angular
    .module('weapon-main.directive', [])
    .directive('weaponMain', weaponMain);

  function weaponMain() {
    return {
      templateUrl: './app/components/account/weapon-main.directive.html',
      restrict: 'EA',
      scope: {
        item: '=',
        bungie: '='
      }
    };
  }
})();
