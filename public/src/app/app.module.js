(function() {
  'use strict';

  angular
    .module('app', [
      'ngRoute',
      'search.controller',
      'account.controller',
      'lodash.factory',
      'fetch-account.factory',
      'definition-match.factory',
      'equipped.factory',
      'talent-grid.factory',
      'talents.directive',
      'stats.directive',
      'weapon-main.directive',
      'weapon.directive',
      'armor-main.directive',
      'armor.directive'
    ]);
})();
