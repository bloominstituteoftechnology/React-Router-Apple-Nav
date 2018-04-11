import React from 'react';
import { Nav, NavItem, NavLink } from '../../node_modules/reactstrap/lib';
import { Link } from 'react-router-dom';

import FaApple from '../../node_modules/react-icons/lib/fa/apple';
import FaSearch from '../../node_modules/react-icons/lib/fa/search';
import FaShoppingCart from '../../node_modules/react-icons/lib/fa/shopping-cart';

const primaryOptions = ["iPad", "iPhone", "Watch", "TV", "Music", "Support"];

export const HeaderNav = () => {
  return (
    <div className="topNav">
      <Nav>
        <NavItem>
          <Link to="/" className="nav-link"><FaApple /></Link>
        </NavItem>
        <NavItem>
          <Link to="/mac" className="nav-link">Mac</Link>
        </NavItem>
        {primaryOptions.map(element => (
          <NavItem key={element} product={element} >
            <NavLink href="#">{element}</NavLink>
          </NavItem>
        ))}
        <NavItem>
          <NavLink href="#"><FaSearch /></NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#"><FaShoppingCart /></NavLink>
        </NavItem>
      </Nav>
    </div>
  )
}
