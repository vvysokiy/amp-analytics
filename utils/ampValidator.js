var rp = require('request-promise');
var amphtmlValidator = require('amphtml-validator');

module.exports = function ampValidator(list, send) {
  const validList = list.filter(item => !!item);

  amphtmlValidator.getInstance().then(function(validator) {
    const data = [];
    validList.forEach(item => {
      const url = item;
      rp(url)
        .then(function(htmlString) {
          const obj = {
            url,
            status: '',
            list: []
          };

          const validateObj = validator.validateString(htmlString);
          obj.status = validateObj.status;

          validateObj.errors.forEach(error => {
            let msg = `line ${error.line}, col ${error.col}: ${error.message}`;
            if (error.specUrl !== null) {
              msg += ` (see ${error.specUrl})`;
            }
            obj.list.push(msg);
          });

          data.push(obj);
          return;
        })
        .then(() => {
          if (data.length === validList.length) {
            send(data);
          }
          return;
        })
        .catch(function(err) {
          console.error('err', err);
        });
    });
  });
};
