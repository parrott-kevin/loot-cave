(function() {
  'use strict';

  angular
    .module('character-stats.directive', [])
    .directive('characterStats', characterStats);

  function characterStats() {
    return {
      templateUrl: './app/components/account/character-stats.directive.html',
      restrict: 'EA',
      scope: {
        stats: '='
      }
    };
  }
})();
