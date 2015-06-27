(function() {
  'use strict';

  angular
    .module('armor.directive', [])
    .directive('armor',armor);

  function armor() {
    return {
      templateUrl: './app/components/account/armor.directive.html',
      restrict: 'EA',
      scope: {
        item: '=',
        bungie: '='
      }
    };
  }
})();
