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
        return {
          active: _.findWhere(nodes, {'nodeHash': i.nodeHash}).isActivated,
          column: i.column,
          row: i.row,
          icon: i.steps[0].icon
        };
      });
      gridLayout = _.sortByOrder(gridLayout, ['column', 'row'], [true, true]);
      return gridLayout;

    }
  }
})();
