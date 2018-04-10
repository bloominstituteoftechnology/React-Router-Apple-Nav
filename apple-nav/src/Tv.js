import React from 'react';
import { NavLink } from 'react-router-dom';

function Tv() {
  return (
    <div className="Submenu">
      <NavLink to="/apple-tv-4k">Apple TV 4k</NavLink>
      <NavLink to="/apple-tv">Apple TV</NavLink>
      <NavLink to="/tv-app">Ipad-Mini 4</NavLink>
      <NavLink to="/accessroies">Accessories</NavLink>      
      <NavLink to="/compare">Compare</NavLink>
    </div>
  )
}

export default Tv;