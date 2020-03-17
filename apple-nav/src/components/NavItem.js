import React from 'react';

import { Link } from 'react-router-dom';

const NavItem = (props) => {
	return (
		<div className="nav-item">
			{props.links.map((item) => (
				<Link to={`/sub-links/${item.name}`}>
					<h2>{item.name}</h2>
				</Link>
			))}
		</div>
	);
};

export default NavItem;
