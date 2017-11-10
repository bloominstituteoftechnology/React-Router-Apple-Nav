import React from 'react';
import { NavLink } from 'react-router-dom'

import './Home.css';
export const Home = () => {
    return (
        <div className='navBar'>
          <NavLink className='home' to="/" activeClassName='activeLink' >Home  </NavLink>
          <NavLink to="/gaming" activeClassName='activeLink' >Gaming  </NavLink>
          <NavLink to="/workstation" activeClassName='activeLink' >Workstation  </NavLink>
          <NavLink to="/laptop" activeClassName='activeLink'>Laptop  </NavLink>
          <NavLink to="/mobile" activeClassName='activeLink' >Mobile  </NavLink>
          <NavLink to="/shield" activeClassName='activeLink' >Shield  </NavLink>
          <NavLink to="/upcoming" activeClassName='activeLink'>Upcoming  </NavLink>
        </div>
    )
}