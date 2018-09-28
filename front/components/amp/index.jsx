import React from 'react';
import axios from 'axios';

import Textarea from '../common/textarea';
import FileUploader from '../common/fileUploader';
import './style';

export default class Amp extends React.PureComponent {
  state = {
    value: '',
  };

  file = [];

  analytics = () => {
    const { value } = this.state;
    const list = value.split('\n');
    console.log('analytics list', list);
    axios.post('/', {list})
      .then(function(response) {
        console.log(response);
      })
      .catch(error => console.error('ERROR_HANDLER: "/test/secret";', error.message));
  }

  onChange = ({target}) => this.setState({value: target.value})

  onChangeUploader = data => {
    this.file = data;
    this.setState({
      value: `${data.join('\n')}`
    });
  }

  render() {
    const {value} = this.state;

    return (
      <div className={'app'}>
        <FileUploader
          onChange={this.onChangeUploader}/>
        <Textarea
          onChange={this.onChange}
          value={value}/>
        <button onClick={this.analytics}>
          Анализировать
        </button>
      </div>
    );
  }
}
