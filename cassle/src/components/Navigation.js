import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
  return (
    <div>
      <Nav className='mainNav'>
        <NavItem>
          <NavLink exact className='subNav' activeClassName='nav-link--active' to="/">CASS HOME</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='subNav' activeClassName='nav-link--active' to="/Cass">Cass</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='subNav' activeClassName='nav-link--active' to="/CPad">CPad</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='subNav' activeClassName='nav-link--active' to="/CPhone">CPhone</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Navigation;
