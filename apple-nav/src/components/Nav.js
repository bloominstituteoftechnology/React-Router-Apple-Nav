import React from 'react';
import NavItem from './NavItem';
import './Nav.css';

const Nav = props => {
  return (
    <nav className="Nav">
      <div className="NavWrapper">
        <NavItem item={<ion-icon name="logo-apple" />} />
        <NavItem item="Mac" />
        <NavItem item="iPad" />
        <NavItem item="iPhone" />
        <NavItem item="Watch" />
        <NavItem item="TV" />
        <NavItem item="Music" />
        <NavItem item="Support" />
        <NavItem item={<ion-icon name="ios-search" />} />
        <NavItem item={<ion-icon name="ios-briefcase" />} />
      </div>
    </nav>
  );
};

export default Nav;
