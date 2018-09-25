var express = require('express');
var router = express.Router();

router.post('/test', function (req, res, next) {
  console.log('Accessing the secret section ...');
  res.send('Got a ALL request');
});

module.exports = router;
