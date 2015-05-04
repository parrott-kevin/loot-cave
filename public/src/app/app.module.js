(function() {
  'use strict';

  angular
    .module('app', [
      'ngRoute',
      'user.controller',
      'fetch-account.factory'
    ]);
})();
