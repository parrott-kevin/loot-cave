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
      'item-display.directive',
      'item-main-panel.directive'
    ]);
})();
