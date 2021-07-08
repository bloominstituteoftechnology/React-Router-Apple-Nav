import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return <div className="NavHeader">
      <div className="Nav">
        <NavLink className="navLink" to="/">
          <i className="fab fa-apple fa-lg" />
        </NavLink>
        <NavLink className="navLink" to="/mac">
          Mac
        </NavLink>
        <NavLink className="navLink" to="/ipad">
          iPad
        </NavLink>
        <NavLink className="navLink" to="/iphone">
          iPhone
        </NavLink>
        <NavLink className="navLink" to="/watch">
          Watch
        </NavLink>
        <NavLink className="navLink" to="/tv">
          TV
        </NavLink>
        <NavLink className="navLink" to="/music">
          Music
        </NavLink>
        <NavLink className="navLink" to="/support">
          Support
        </NavLink>
        <NavLink to="/search">
          <input type="text" className="fontControl" placeholder="&#xf002;" />
        </NavLink>
        <NavLink className="navLink" to="/shopping">
          <i className="fas fa-shopping-bag fa-lg" />
        </NavLink>
      </div>
    </div>;
};

export default Nav;
