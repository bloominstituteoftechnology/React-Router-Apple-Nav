import React from 'react';
import { NavLink } from 'react-router-dom';

import './nav.css'

const MainNav = () => {
  return (
    <div className="main_nav">
      <NavLink className="nav_link" to='/mac'>Mac</NavLink>
      <NavLink className="nav_link" to='/ipad'>iPad</NavLink>
      <NavLink className="nav_link" to='/iphone'>iPhone</NavLink>
      <NavLink className="nav_link" to='/watch'>Watch</NavLink>
      <NavLink className="nav_link" to='/tv'>Tv</NavLink>
      <NavLink className="nav_link" to='/music'>Music</NavLink>
      <NavLink className="nav_link" to='/support'>Support</NavLink>      
    </div>
  );
}
export default MainNav;