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
      var gridLayout = grid.nodes.map(function(node) {
        if (node.steps[0].icon !== '/img/misc/missing_icon.png' && node.column >= 0) {
          return {
            active: _.findWhere(nodes, {'nodeHash': node.nodeHash}).isActivated,
            column: node.column,
            row: node.row,
            icon: node.steps[0].icon,
            name: node.steps[0].nodeStepName,
            description: node.steps[0].nodeStepDescription
          };
        } else {
          return {};
        }
      });
      //gridLayout = _.reject(gridLayout, {'icon': '/img/misc/missing_icon.png'})
      gridLayout = _.sortByOrder(gridLayout, ['column', 'row'], [true, true]);

      var columnSpread = _.max(gridLayout, 'column').column - _.min(gridLayout, 'column').column;
      var result = [];
      for (var i = 0; i < columnSpread; i++) {
        result.push(_.filter(gridLayout, {'column': gridLayout[0].column}));
        gridLayout = _.reject(gridLayout, {'column': gridLayout[0].column});
      }

      return result;

    }
  }
})();
