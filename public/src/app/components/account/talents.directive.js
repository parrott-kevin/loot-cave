(function() {
  'use strict';

  angular
    .module('talents.directive', [])
    .directive('talents', talents);

  function talents() {
    return {
      templateUrl: './app/components/account/talents.directive.html',
      restrict: 'EA',
      scope: {
        item: '=',
        bungie: '='
      }
    };
  }
})();
