import React from 'react';

import { nav } from '../../src/data.js';
import NavItem from './NavItem.jsx';

const NavHeader = () => {

  return (
    nav.map((item, index) => {
      return <NavItem name={item.name} id={item.id} key={index} />
    })
  );
};

export default NavHeader;
