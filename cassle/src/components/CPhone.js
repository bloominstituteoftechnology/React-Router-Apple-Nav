import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Cass = () => {
  return (
    <div>
      <Nav className="nestedNav">
        <NavItem>
          <NavLink exact className='subNav' activeClassName='nav-link--active' to="/CPhone1">CPhone1</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='subNav' activeClassName='nav-link--active' to="/CPhone2">CPhone2</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='subNav' activeClassName='nav-link--active' to="/CPhone3">CPhone3</NavLink>
        </NavItem>
      </Nav>
      <div>
        <h1>CPhone: the Ultimate</h1>
      </div>
    </div>
  );
};


export default Cass ;
