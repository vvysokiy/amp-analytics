import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


import './style';

const Sidebar = ({ className }) => (
  <div className={className ? `sidebar ${className}` : 'sidebar'}>
    <Link className={'sidebar__item'} to='/amp'>Amp</Link>
    <Link className={'sidebar__item'} to='/schema'>schema</Link>
  </div>
);

Sidebar.propTypes = {
  className: PropTypes.string
};

export default Sidebar;
