import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Cass = () => {
  return (
    <div>
      <Nav className="nestedNav">
        <NavItem>
          <NavLink exact className='subNav' activeClassName='nav-link--active' to="/CPad1">CPad1</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='subNav' activeClassName='nav-link--active' to="/CPad2">CPad2</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='subNav' activeClassName='nav-link--active' to="/CPad3">CPad3</NavLink>
        </NavItem>
      </Nav>
      <div>
        <h1>CPad: the Ultimate</h1>
      </div>
    </div>
  );
};


export default Cass ;
