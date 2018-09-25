import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.jsx'

ReactDOM.render((
    <App/>
), document.getElementById('root'))

//
// ReactDOM.render((
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// ), document.getElementById('root'))

// import axios from 'axios';
//
// axios.post('/test/secret', {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(error => console.error('ERROR_HANDLER: "/test/secret";', error.message));
//
console.log('привет от Вовы');
