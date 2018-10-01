import React from 'react';
import PropTypes from 'prop-types';

import './style';

const Button = ({ className, textClass, text, onClick }) => {
  const btnClass = className ? `btn ${className}` : 'btn';
  const titleClass = textClass ? `btn__title ${textClass}` : 'btn__title';

  return (
    <button
      className={btnClass}
      onClick={onClick ? onClick : () => console.log('btn_click')}>
      <div className={titleClass}>
        {text ? text : 'No name button'}
      </div>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  textClass: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
