import React from 'react';
import axios from 'axios';

import Textarea from './textarea.jsx';

export default class App extends React.PureComponent {
  state = {
    value: '',
  };

  analytics = () => {
    const { value } = this.state;
    const list = value.split('\n');
    console.log('analytics list', list);
    axios.post('/', {list})
      .then(function (response) {
        console.log(response);
      })
      .catch(error => console.error('ERROR_HANDLER: "/test/secret";', error.message));
  }

  onChange = event => {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    const {value} = this.state;

    return (
      <div>
        <button onClick={this.analytics}>
          analytics
        </button>
        <Textarea
          onChange={this.onChange}
          value={value}/>
      </div>
    )
  }
};
