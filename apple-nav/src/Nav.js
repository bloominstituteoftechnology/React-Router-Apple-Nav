{/*I created this document since the README says I should*/}

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

{/*I figured this was the easiest way to make the basic nav bar. Like, I thought making a component and then making links for each item would work, and it did! I might need to change this if I ever want to get the subnav working, though. Like, maybe put all of this info into a variable/array somewhere and call it. */}

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
			  
