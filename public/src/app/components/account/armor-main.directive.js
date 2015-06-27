(function() {
  'use strict';

  angular
    .module('armor-main.directive', [])
    .directive('armorMain', armorMain);

  function armorMain() {
    return {
      templateUrl: './app/components/account/armor-main.directive.html',
      restrict: 'EA',
      scope: {
        item: '=',
        bungie: '='
      }
      //,
      //link: function(scope, elem, attrs) {
      //  console.log(scope.bungie);
      //}

    };
  }
})();
