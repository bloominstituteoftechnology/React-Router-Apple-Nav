import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
       <div className="nav-bar">
        <NavLink to='/'>Home</NavLink>     
      </div>)
  }
}

export default NavBar;