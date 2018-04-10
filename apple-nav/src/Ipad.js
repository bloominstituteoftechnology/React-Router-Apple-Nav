import React from 'react';
import { NavLink } from 'react-router-dom';

function Ipad() {
  return (
    <div className="Submenu">
      <NavLink to="/ipad-pro">Ipad-Pro</NavLink>
      <NavLink to="/ipad">Ipad</NavLink>
      <NavLink to="/ipad-mini">Ipad-Mini 4</NavLink>
      <NavLink to="/ios">iOS 11</NavLink>
      <NavLink to="/accessroies">Accessories</NavLink>
      <NavLink to="/compare">Compare</NavLink>
    </div>
  )
}

export default Ipad;