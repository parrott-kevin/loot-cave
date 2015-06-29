(function() {
  'use strict';

  angular
    .module('item-display.directive', [])
    .directive('itemDisplay', itemDisplay);

  function itemDisplay() {
    return {
      templateUrl: './app/components/account/item-display.directive.html',
      restrict: 'EA',
      scope: {
        item: '=',
        bungie: '=',
        type: '='
      }
    };
  }
})();
