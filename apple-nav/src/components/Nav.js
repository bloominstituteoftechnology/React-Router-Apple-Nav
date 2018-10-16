import React from 'react';
import NavItem from './NavItem';
import './Nav.css';

const Nav = props => {
  return (
    <nav className="Nav">
      <div className="NavWrapper">
        <NavItem item={<ion-icon name="logo-apple" link="/" />} />
        <NavItem item="Mac" link="mac" />
        <NavItem item="iPad" link="ipad" />
        <NavItem item="iPhone" link="iphone" />
        <NavItem item="Watch" link="watch" />
        <NavItem item="TV" link="tv" />
        <NavItem item="Music" link="music" />
        <NavItem item="Support" link="support" />
        <NavItem item={<ion-icon name="ios-search" link="mac" />} />
        <NavItem item={<ion-icon name="ios-briefcase" link="mac" />} />
      </div>
    </nav>
  );
};

export default Nav;
