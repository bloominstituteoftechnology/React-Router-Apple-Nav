import React from 'react';
import { NavLink } from 'react-router-dom';

function Iphone() {
  return (
    <div className="Submenu">
      <NavLink to="/iphone-x">iPhone X</NavLink>
      <NavLink to="/iphone-8">iPhone 8</NavLink>
      <NavLink to="/iphone-7">iPhone 7</NavLink>
      <NavLink to="/iphone-6">iPhone 6</NavLink>
      <NavLink to="/iphone-se">iPhone SE</NavLink>
      <NavLink to="/ios">iOS 11</NavLink>
      <NavLink to="/accessroies">Accessories</NavLink>
      <NavLink to="/compare">Compare</NavLink>
    </div>
  )
}

export default Iphone;