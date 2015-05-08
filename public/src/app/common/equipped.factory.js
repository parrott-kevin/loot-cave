(function() {
  'use strict';

  angular
    .module('equipped.factory', [])
    .factory('equipped', equipped);

  function equipped() {
    return {
      get: get
    };

    function get(){}

  }
})();
