import React from 'react';
import PropTypes from 'prop-types';

import './style';

const Statistic = ({sent, accept, valid, invalid}) => (
  <div className={'statistic'}>
    <div className={'statistic__result'}>
      <div className={'statistic__item'}>
        Отправлено/получено: {sent}/{accept}
      </div>
      <div className={'statistic__item'}>
        Валидных страниц: {valid}
      </div>
      <div className={'statistic__item'}>
        Не валидных: {invalid}
      </div>
    </div>
  </div>
);

Statistic.propTypes = {
  sent: PropTypes.string,
  accept: PropTypes.string,
  valid: PropTypes.number,
  invalid: PropTypes.number,
};

export default Statistic;
