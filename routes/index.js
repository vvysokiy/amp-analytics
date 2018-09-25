var express = require('express');
var router = express.Router();
var request = require('request');
var rp = require('request-promise');
var amphtmlValidator = require('amphtml-validator');

/* GET test page. */
router.get('/', function(req, res, next) {
  const data = {
    title: 'test'
  }

  res.render('index', data);
});

router.post('/', function (req, res) {
  const { body } = req;
  const URL = body.list[0];

  analytics(body.list, res);
});

module.exports = router;

function analytics(list, response) {
  amphtmlValidator.getInstance().then(function (validator) {
    startRequest(list, validator, response);
  });
}

function startRequest(list, validator, response) {
  const data = [];
  console.log('list.length', list.length);
  list.forEach(item => {
    const url = item;

    rp(url)
      .then(function (htmlString) {
        const obj = {
          url,
          status: '',
          list: []
        }

        const result = validator.validateString(htmlString);
        obj.status = result.status;

        for (var ii = 0; ii < result.errors.length; ii++) {
          var error = result.errors[ii];

          obj.list.push(error);

          var msg = 'line ' + error.line + ', col ' + error.col + ': ' + error.message;
          if (error.specUrl !== null) {
            msg += ' (see ' + error.specUrl + ')';
          }
        }

        data.push(obj);
        return data;
      })
      .then(data => {
        console.log('data.length', data.length);
        if (data.length === list.length) {
          console.log('внутри data.length', data.length);
          console.log('list', list);
          sendOnClient(data, response);
        }
      })
      .catch(function (err) {
          console.error('err', err);
      });

  })
}

function sendOnClient(data, response) {
  response.send({
    result: data
  });
}
