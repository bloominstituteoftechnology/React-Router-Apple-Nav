import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
	return (
		<div className="Navbar">
			<ul className="Navbar__nav">
				<li className="NavLink">
					<NavLink to="/" activeClassName="Navlink--selected" exact>
						Home
					</NavLink>
				</li>
				<li className="NavLink">
					<NavLink to="/ipad" activeClassName="Navlink--selected">
						IPad
					</NavLink>
				</li>
				<li className="NavLink">
					<NavLink to="/iphone" activeClassName="Navlink--selected">
						IPhone
					</NavLink>
				</li>
			</ul>
		</div>
	);
}

export default Navigation;
