import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from '../../node_modules/reactstrap/lib';

import FaApple from '../../node_modules/react-icons/lib/fa/apple';
import FaSearch from '../../node_modules/react-icons/lib/fa/search';
import FaShoppingCart from '../../node_modules/react-icons/lib/fa/shopping-cart';

const primaryOptions = ["Mac", "iPad", "iPhone", "Watch", "TV", "Music", "Support"];

export const HeaderNav = () => {
  return (
    <div className="topNav">
      <Nav>
        <NavItem>
          <NavLink href="#"><FaApple /></NavLink>
        </NavItem>
        {primaryOptions.map(element => (
          <NavItem key={element}>
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
