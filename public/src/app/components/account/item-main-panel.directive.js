(function() {
  'use strict';

  angular
    .module('item-main-panel.directive', [])
    .directive('itemMainPanel', itemMainPanel);

  function itemMainPanel() {
    return {
      templateUrl: './app/components/account/item-main-panel.directive.html',
      restrict: 'EA',
      scope: {
        item: '=',
        bungie: '=',
        type: '='
      }
    };
  }
})();
