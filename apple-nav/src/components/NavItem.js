import React from 'react';
import './Nav.css';

const NavItem = props => {
  return (
    <a href="/" className="NavItem">
      {props.item}
    </a>
  );
};

export default NavItem;
