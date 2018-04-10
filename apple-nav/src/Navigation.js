import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
       <div className="NavBar">
        <NavLink to='/'>Home</NavLink>
        <ul>
          <li>
            <NavLink to='/mac'>Mac</NavLink>
          </li>
          <li>
            <NavLink to='/ipad'>Ipad</NavLink>
          </li>
          <li>
            <NavLink to='/iphone'>Iphone</NavLink>
          </li>
          <li>
            <NavLink to='/watch'>Watch</NavLink>
          </li>
          <li>
            <NavLink to='/tv'>Tv</NavLink>
          </li>
          <li>
            <NavLink to='/music'>Music</NavLink>
          </li>
          <li>
            <NavLink to='/support'>Support</NavLink>
          </li>
          <li>
            <NavLink to='/search'>Search</NavLink>
          </li>
        </ul>
    </div>
  );
};

export default Navigation;