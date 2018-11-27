// Importing libraries
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({data}) => {
  return (
    <div className="navbar">
      {
        data.map(link => {
          if (link.name === 'Home') {
            return (
              <NavLink key={link.id} to={`/${link.name.toLowerCase()}`}>
              <i class="fab fa-apple"></i>
              </NavLink>)
          }
          if (link.name === 'Search') {
            return (
              <NavLink key={link.id} to={`/${link.name.toLowerCase()}`}>
              <i class="fas fa-search"></i>
              </NavLink>)
          }
          if (link.name === 'Shop') {
            return (
              <NavLink key={link.id} to={`/${link.name.toLowerCase()}`}>
              <i class="fas fa-shopping-bag"></i>
              </NavLink>)
          }
          return <NavLink key={link.id} to={`/${link.name.toLowerCase()}`}>{link.name}</NavLink>
        })
      }
    </div>
  );
}
 
export default NavBar;