import React from 'react';
import PropTypes from 'prop-types';

import './style';

const Item = ({ data, toggle, openId }) => (
  <div className={'list__item'}>
    <div
      className={'list__item-title'}
      onClick={() => toggle(data.parent.id)}>
      {data.parent.title}
    </div>
    <div
      className={'list__item-childs'}
      style={{
        height: openId === data.parent.id ? (
          data.child.length * 30 + 5
        ) : 0,
      }}>
      {data.child.map((item, index) => (
        <div
          key={index}
          className={'list__item-child'}>
          {item}
        </div>
      ))}
    </div>
  </div>
);

Item.propTypes = {
  openId: PropTypes.string,
  data: PropTypes.object,
  toggle: PropTypes.func
};

export default Item;
