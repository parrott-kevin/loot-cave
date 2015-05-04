(function() {
  'use strict';

  angular
    .module('lodash.factory', [])
    .factory('_', lodash);

  lodash.$inject = ['$window'];

  function lodash($window) {
    return $window._;
  }

})();
