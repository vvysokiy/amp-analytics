import React from 'react';
import PropTypes from 'prop-types';

import './style';

const Textarea = ({ value, onChange }) => (
  <textarea
    className={'textarea'}
    value={value ? value : ''}
    onChange={onChange ? onChange : () => console.log('textarea change')} />
);

Textarea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Textarea;
