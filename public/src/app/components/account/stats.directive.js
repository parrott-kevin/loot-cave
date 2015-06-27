(function() {
  'use strict';

  angular
    .module('stats.directive', [])
    .directive('stats', stats);

  function stats() {
    return {
      templateUrl: './app/components/account/stats.directive.html',
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
