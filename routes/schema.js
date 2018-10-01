var express = require('express');
var schemaValidator = require('../utils/schemaValidator');

var router = express.Router();
// var request = require('request');

/* GET test page. */
router.get('/', function(req, res) {
  const data = {
    title: 'test'
  };

  res.render('index', data);
});

router.post('/', function(req, res) {
  const { body } = req;
  // const URL = body.list[0];

  const callback = data => {
    res.send({
      result: data
    });
  };

  schemaValidator(body.list, callback);
});

module.exports = router;
