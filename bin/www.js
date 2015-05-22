'use strict';

var app = require('../app');
var config = require('../config/config.json')[process.env.NODE_ENV];

app.set('port', process.env.PORT || config.port);

var server = app.listen(app.get('port'), function() {
  console.log('Server started on http://localhost:' + server.address().port);
});
