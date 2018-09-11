import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class NavWrapper extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navLinks: ['Mac', 'iPad', 'iPhone', 'Watch', 'TV', 'Music']
		};
	}
	render() {
		return (
			<nav className="NavWrapper">
				<Link to="/" className="home-button">
					AppleLogo
				</Link>

				{this.state.navLinks.map(link => (
					<NavLink
						to={'/' + link}
						className="nav-link"
						activeClassName="nav-active"
						key={link}
					>
						{link}
					</NavLink>
				))}
			</nav>
		);
	}
}

export default NavWrapper;
