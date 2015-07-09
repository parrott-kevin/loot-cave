(function() {
  'use strict';

  angular
    .module('stats.directive', [])
    .directive('stats', itemStats);

  function itemStats() {
    return {
      templateUrl: './app/components/account/stats.directive.html',
      restrict: 'EA',
      scope: {
        item: '='
      }
      //,
      //link: function(scope, elem, attrs) {
      //  console.log(scope.item);
      //}

    };
  }
})();
