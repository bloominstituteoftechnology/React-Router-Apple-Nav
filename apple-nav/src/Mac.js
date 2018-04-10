import React from 'react';
import { NavLink } from 'react-router-dom';

function Mac() {
  return (  
    <div className="Submenu">
      <NavLink to="/macbook">MacBook</NavLink>
      <NavLink to="/macbook-air">MacBook Air</NavLink>
      <NavLink to="/imac">iMac</NavLink>
      <NavLink to="/imac-pro">iMac Pro</NavLink>
      <NavLink to="/mac-pro">Mac Pro</NavLink>
      <NavLink to="/mac-mini">Mac mini</NavLink>
      <NavLink to="/accessroies">Accessories</NavLink>
      <NavLink to="/high-sierra">High Sierra</NavLink>
      <NavLink to="/compare">Compare</NavLink>
    </div>
  )
}

export default Mac;