'use strict';

var express = require('express');
var router = express.Router();

var account = require('../controllers/account');

router.get('/getAccount', account.get);

module.exports = router;
