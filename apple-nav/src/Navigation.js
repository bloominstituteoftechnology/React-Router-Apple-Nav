import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="NavBar">
      <NavLink activeClassName="NavBar--active" to='/'>Home</NavLink>
      <NavLink activeClassName="NavBar--active" to='/mac'>Mac</NavLink>
      <NavLink activeClassName="NavBar--active" to='/ipad'>Ipad</NavLink>
      <NavLink activeClassName="NavBar--active" to='/iphone'>Iphone</NavLink>
      <NavLink activeClassName="NavBar--active" to='/watch'>Watch</NavLink>
      <NavLink activeClassName="NavBar--active" to='/tv'>Tv</NavLink>
      <NavLink activeClassName="NavBar--active" to='/music'>Music</NavLink>
      <NavLink activeClassName="NavBar--active" to='/support'>Support</NavLink>
      <NavLink activeClassName="NavBar--active" to='/search'>Search</NavLink>
    </div>
  );
};

export default Navigation;