import React from 'react';
import '../App.css';
import NavLink from './NavLink';

const NavWrapper = props => {
  return (
    <div className="nav-wrapper-container">
      <div className="nav-wrapper">
        <img src='icons/apple.svg' alt="Apple." />
        {props.links.map(link => (
          <NavLink key={Math.random()} link={link} />
        ))}
        <a>Support</a>
        <img src='icons/search.svg' alt="Search." />
        <img src='icons/bag.svg' alt="Bag." />
      </div>
    </div>
  );
}

export default NavWrapper;
