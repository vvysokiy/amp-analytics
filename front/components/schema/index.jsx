import React from 'react';
import axios from 'axios';

import Button from '../common/button';
import Textarea from '../common/textarea';
import FileUploader from '../common/fileUploader';
import Statistic from '../common/statistic';
// import CollapsibleList from '../common/collapsibleList';

import './style';

export default class Schema extends React.PureComponent {
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
    //
    this.setState({sentUrls: `${list.length}`});
    console.log('value', value);


    const proxyurl = 'https://cors-anywhere.herokuapp.com/';
    const url = 'https://search.google.com/structured-data/testing-tool/validate';

    list.forEach(item => {
      axios({
        method: 'post',
        headers: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8' },
        url: proxyurl + url,
        data: { url: `${item}`}
      })
        .then(({data}) => {
          const {result} = data;
          const resultArr = result.map(el => JSON.parse(el.split('\n')[1]));
          console.log('resultArr', resultArr);
          this.result = resultArr;
          this.setState({acceptUrls: `${resultArr.length}`});
        })
        .catch(error => console.error('ERROR_HANDLER: "/schema";', error.message));
    });

    // axios.post(proxyurl + url, { url: 'https://news.rambler.ru/politics/40930958-kreml-raskazal-o-pohode-putina-i-blera-v-teatr/'})
    //   .then((result) => {
    //     console.log('result', result);
    //     // const {result} = data;
    //     // const resultArr = result.map(item => JSON.parse(item.split('\n')[1]));
    //     // console.log('resultArr', resultArr);
    //     // this.result = resultArr;
    //     // this.setState({acceptUrls: `${resultArr.length}`});
    //   })
    //   .catch(error => console.error('ERROR_HANDLER: "/schema";', error.message));
    // axios.post('/schema', {list})
    //   .then((result) => {
    //     console.log('result', result);
    //     // const {result} = data;
    //     // const resultArr = result.map(item => JSON.parse(item.split('\n')[1]));
    //     // console.log('resultArr', resultArr);
    //     // this.result = resultArr;
    //     // this.setState({acceptUrls: `${resultArr.length}`});
    //   })
    //   .catch(error => console.error('ERROR_HANDLER: "/schema";', error.message));
  }

  onChange = ({target}) => this.setState({value: target.value})

  onChangeUploader = data => {
    this.setState({
      value: `${data.join('\n')}`
    });
  }

  render() {
    const {value, sentUrls, acceptUrls} = this.state;

    const str = 'https://news.rambler.ru/ https://news.rambler.ru/army/40929449-iran-zapustil-po-sirii-rakety-s-ugrozami-ssha-i-izrailyu/';
    const valid = 1;
    const invalid = 1;

    return (
      <div className={'schema'}>
        {str}
        <div className={'schema__control'}>
          <div className={'schema__panel schema__panel--left'}>
            <FileUploader
              className={'amp__uploader'}
              onChange={this.onChangeUploader}/>
            <Button
              onClick={this.analytics}
              text={'Анализировать'}/>
          </div>
          <div className={'schema__panel schema__panel--right'}>
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
      </div>
    );
  }
}
