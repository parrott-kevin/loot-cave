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

    function get(nodes, talentGridDefinition) {
      var gridLayout = talentGridDefinition.nodes.map(function(talentGridNode) {
        var node = _.findWhere(nodes, {'nodeHash': talentGridNode.nodeHash});
        var step = _.findWhere(talentGridNode.steps, {'stepIndex': node.stepIndex});
        if (step.icon !== '/img/misc/missing_icon.png' && talentGridNode.column >= 0) {
          return {
            active: node.isActivated,
            column: talentGridNode.column,
            row: talentGridNode.row,
            icon: step.icon,
            name: step.nodeStepName,
            description: step.nodeStepDescription
          };
        } else {
          return {};
        }
      });
      //gridLayout = _.reject(gridLayout, {'icon': '/img/misc/missing_icon.png'})
      gridLayout = _.sortByOrder(gridLayout, ['column', 'row'], [true, true]);

      var columnSpread = _.max(gridLayout, 'column').column - _.min(gridLayout, 'column').column;
      var result = [];
      for (var i = 0; i <= columnSpread; i++) {
        result.push(_.filter(gridLayout, {'column': gridLayout[0].column}));
        gridLayout = _.reject(gridLayout, {'column': gridLayout[0].column});
      }

      return result;

    }
  }
})();
