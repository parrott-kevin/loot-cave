'use strict';

var app = require('../app');
var config = require('../config/config.json');

app.set('port', process.env.PORT || config.port);

var server = app.listen(app.get('port'), function() {
  console.log('Server started on http://localhost:' + server.address().port);
});
