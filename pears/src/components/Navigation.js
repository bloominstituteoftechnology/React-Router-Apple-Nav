import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
	return (
		<div>
			<ul>
				<li className="navLink">
					<NavLink to="/" activeClassName="navlink--selected" exact>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/ipad" activeClassName="navlink--selected">
						IPad
					</NavLink>
				</li>
				<li>
					<NavLink to="/iphone" activeClassName="navlink--selected">
						IPhone
					</NavLink>
				</li>
			</ul>
		</div>
	);
}

export default Navigation;
