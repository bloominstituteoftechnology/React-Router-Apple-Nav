import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render = () => {
    return (
    	<header>
    		<div>
    			<NavLink
    				to="/Mac">Mac</NavLink>
                <NavLink
                    to="/iPhone">iPhone</NavLink>
    			<NavLink
    				to="/iPad">iPad</NavLink>
    			<NavLink
                    to="/iPod">iPod</NavLink>
    			<NavLink
    				to="/Watch">Watch</NavLink>
    			<NavLink
    				to="/TV">TV</NavLink>
    			<NavLink
    				to="/Music">Music</NavLink>
    			<NavLink
    				to="/Support">Support</NavLink>
    		</div>
    	</header>    
    );
  }
}

export default Header;
