import React from 'react';
import PropTypes from 'prop-types';

import CollapsibleList from '../common/collapsibleList';
import './style';

const Statistic = ({sent, accept, result}) => {
  const invalidArr = [];
  let valid = 0;
  let invalid = 0;

  result.forEach(item => {
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
    <div className={'amp__result-wrapper'}>
      <div className={'amp__result'}>
        <div className={'amp__result-item amp__result-item---title'}>
          Отправлено/получено: {sent}/{accept}
        </div>
        <div className={'amp__result-item amp__result-item--valid'}>
          Валидных страниц: {valid}
        </div>
        <div className={'amp__result-item amp__result-item--valid'}>
          Не валидных: {invalid}
        </div>
      </div>
      {result.length ? (
        <CollapsibleList list={invalidArr}/>
      ) : null}
    </div>
  );
};

Statistic.propTypes = {
  sent: PropTypes.string,
  accept: PropTypes.string,
  result: PropTypes.array,
};

export default Statistic;
