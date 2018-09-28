import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


import './style';

const Sidebar = ({ className }) => {
  const wrapperClass = className ? `sidebar ${className}` : 'sidebar';

  return (
    <div className={wrapperClass}>
      <Link to='/amp'>Amp</Link>
      <Link to='/schema'>schema</Link>
    </div>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string
};

export default Sidebar;
