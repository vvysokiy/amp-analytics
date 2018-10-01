var rp = require('request-promise');
var axios = require('axios');

const CORP_PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const SCHEMA_GOOGLE_VALIDATOR_URL = 'https://search.google.com/structured-data/testing-tool/validate';

module.exports = function schemaValidator(list, callback) {
  const validList = list.filter(item => !!item);
  console.log('validList', validList);
  const result = [];
  // callback(result);
  validList.forEach(item => {
    // const url = item;
    // console.log('item', item);
    axios.post(CORP_PROXY_URL + SCHEMA_GOOGLE_VALIDATOR_URL, {url: item})
      .then(req => {
        console.log('req');
        const {data} = req;
        const obj = Object.assign({}, data);
        result.push(obj);
      })
      .then(() => {
        if (result.length === validList.length) {
          callback(result);
        }
        return;
      })
      .catch(err => console.log(err.message));

    // rp(url)
    //   .then(function(html) {
    //     axios.post(CORP_PROXY_URL + SCHEMA_GOOGLE_VALIDATOR_URL, {html})
    //       .then(req => {
    //         console.log('req');
    //         const {data} = req;
    //         const obj = Object.assign({}, data);
    //         result.push(obj);
    //       })
    //       .then(() => {
    //         if (result.length === validList.length) {
    //           callback(result);
    //         }
    //         return;
    //       })
    //       .catch(err => console.log(err.message));
    //     return;
    //   })
    //   .catch(function(err) {
    //     console.log(err.message);
    //   });
  });
};
