(function() {
  'use strict';

  angular
    .module('item-stats.directive', [])
    .directive('item-stats', itemStats);

  function itemStats() {
    return {
      templateUrl: './app/components/account/item-stats.directive.html',
      restrict: 'EA',
      scope: {
        item: '='
      }
      //,
      //link: function(scope, elem, attrs) {
      //  console.log(scope.bungie);
      //}

    };
  }
})();
