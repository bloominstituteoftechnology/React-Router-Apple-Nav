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
                <img src="https://www.apple.com/v/ipad/home/ak/images/overview/ase/apple-gift-card__ck1hmbc30a2q_large_2x.png" alt={link.name}/>
              </NavLink>)
          }
          return <NavLink key={link.id} to={`/${link.name.toLowerCase()}`}>{link.name}</NavLink>
        })
      }
    </div>
  );
}
 
export default NavBar;