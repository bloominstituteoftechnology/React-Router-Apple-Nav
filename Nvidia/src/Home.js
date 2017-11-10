import React from 'react';
import { NavLink } from 'react-router-dom'

import './Home.css';
export const Home = () => {
    return (
        <div className='navBar'>
          <NavLink to="/" activeClassName='activeLink' >Home  </NavLink>
        </div>
    )
}