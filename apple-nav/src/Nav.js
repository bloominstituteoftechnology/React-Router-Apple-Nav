import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Nav extends Component {
  render () {
    return (
      <div>
	<NavLink to ="/"> Home </NavLink>
	<NavLink to ="/mac"> Mac </NavLink>
	<NavLink to ="/ipad"> iPad </NavLink>
	<NavLink to ="/iphone"> iPhone </NavLink>
	<NavLink to ="/watch"> Watch </NavLink>
	<NavLink to ="/tv"> TV </NavLink>
	<NavLink to ="/music"> Music </NavLink>
	<NavLink to ="/support"> Support </NavLink>
	<NavLink to ="/search"> Search </NavLink>
	<NavLink to ="/shop"> Shop </NavLink>
      </div>
    );
  }
}

export default Nav;
			  
