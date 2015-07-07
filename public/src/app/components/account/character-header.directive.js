(function() {
  'use strict';

  angular
    .module('character-header.directive', [])
    .directive('characterHeader', characterHeader);

  function characterHeader() {
    return {
      templateUrl: './app/components/account/character-header.directive.html',
      restrict: 'EA',
      scope: {
        character: '=',
        bungie: '='
      }
    };
  }
})();
