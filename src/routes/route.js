// let obj = require('..//logger/logger');
let object = require('..//util/helper')

const express = require('express');
const router = express.Router();
router.get('/test-me', function (req, res) {
object.currentdate;
object.currentmonth;
object.details;
// obj.welcome;
res.send('My first ever api!')

});

module.exports = router;
// adding this comment for no reason