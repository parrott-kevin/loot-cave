(function() {
  'use strict';

  angular
    .module('talent-grid.factory', [])
    .factory('talentGrid', talentGrid);

  talentGrid.$inject = ['_'];
  function talentGrid(_) {
    return {
      get: get
    };

    function get(nodes, grid) {
      var gridLayout = grid.nodes.map(function(i) {
        return [i.column, i.row];
      });
      console.log(gridLayout);

    }
  }
})();
