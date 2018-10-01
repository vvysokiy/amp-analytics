import React from 'react';
import axios from 'axios';

import Button from '../common/button';
import Textarea from '../common/textarea';
import FileUploader from '../common/fileUploader';
import Statistic from '../common/statistic';
import CollapsibleList from '../common/collapsibleList';
import './style';

export default class Amp extends React.PureComponent {
  state = {
    value: '',
    sentUrls: '',
    acceptUrls: '',
  };

  result = [];

  analytics = () => {
    const { value } = this.state;
    if (!value) {
      return;
    }

    const list = value.split('\n').filter(item => !!item);

    this.setState({sentUrls: `${list.length}`});

    axios.post('/amp', {list})
      .then(({data}) => {
        const {result} = data;
        this.result = result;
        console.log('result', result);
        this.setState({acceptUrls: `${result.length}`});
      })
      .catch(error => console.error('ERROR_HANDLER: "/amp";', error.message));
  }

  onChange = ({target}) => this.setState({value: target.value})

  onChangeUploader = data => {
    this.setState({
      value: `${data.join('\n')}`
    });
  }

  render() {
    const {value, sentUrls, acceptUrls} = this.state;

    const invalidArr = [];
    let valid = 0;
    let invalid = 0;
    this.result.forEach(item => {
      if (item.status === 'PASS') {
        valid++;
      } else {
        invalid++;
        invalidArr.push({
          parent: {
            id: item.url,
            title: item.url,
          },
          child: item.list
        });
      }
    });

    return (
      <div className={'amp'}>
        <div className={'amp__control'}>
          <div className={'amp__panel amp__panel--left'}>
            <FileUploader
              className={'amp__uploader'}
              onChange={this.onChangeUploader}/>
            <Button
              onClick={this.analytics}
              text={'Анализировать'}/>
          </div>
          <div className={'amp__panel amp__panel--right'}>
            <Textarea
              onChange={this.onChange}
              value={value}/>
          </div>
        </div>
        {sentUrls && acceptUrls ? (
          <Statistic
            sent={sentUrls}
            accept={acceptUrls}
            valid={valid}
            invalid={invalid}/>
        ) : null}
        {sentUrls && acceptUrls && invalidArr.length ? (
          <CollapsibleList list={invalidArr}/>
        ) : null}
      </div>
    );
  }
}
