(function() {
  'use strict';

  angular
    .module('weapon.directive', [])
    .directive('weapon', weapon);

  function weapon() {
    return {
      templateUrl: './app/components/account/weapon.directive.html',
      restrict: 'EA',
      scope: {
        item: '=',
        bungie: '='
      }
    };
  }
})();
