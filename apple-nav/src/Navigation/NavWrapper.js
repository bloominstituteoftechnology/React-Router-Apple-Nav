import React from 'react';
import { NavLink } from 'react-router-dom';

import Nav from './Nav';

const NavWrapper = props => {
  return (
    <>
      {/* apple logo/home page here */}
      {props.navData.map(nav => (
        <NavLink to={`/${nav.toLowerCase()}`}>
          <Nav nav={nav} selectNav={props.selectNav} />
        </NavLink>
      ))}
      {/* search overlay component here */}
      {/* shopping bag dropdown */}
    </>
  );
}

export default NavWrapper;
