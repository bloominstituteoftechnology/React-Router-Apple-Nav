import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Cass = () => {
  return (
    <div>
      <Nav className="nestedNav">
        <NavItem>
          <NavLink exact className='subNav' activeClassName='nav-link--active' to="/Cass1">Cass1</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='subNav' activeClassName='nav-link--active' to="/Cass2">Cass2</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='subNav' activeClassName='nav-link--active' to="/Cass3">Cass3</NavLink>
        </NavItem>
      </Nav>
      <div>
        <h1>Cass: the Ultimate</h1>
      </div>
    </div>
  );
};


export default Cass ;
