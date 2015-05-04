'use strict';
var _ = require('lodash');

var definitionMatch = {
  get: function(obj) {
    // todo: loop through hashkey passing each object to getDefinition
    var hashKey = [
        {
          //path: ['accountInfo', 'data', 'inventory', 'currencies'],
          hash: 'itemHash',
          definition: ['accountInfo', 'definitions', 'items']
        }
    ];

    hashKey.map(function(val) {
      getDefinition(obj, val.path, val.hash, val.definition);
    });
    return obj;
  }
};

function getDefinition(obj, path, hash, definition) {
  var result = _.get(obj, path);
  if (_.isArray(result)) {
    result.map(function(val) {
      var def = definition;
      def.push(val[hash]);
      val.definition = _.get(obj, def);
    });
  } else {
    _.get(obj, definition);
  }
}
module.exports = definitionMatch;
