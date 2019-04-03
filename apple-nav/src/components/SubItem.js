import React from 'react';

import { Link } from 'react-router-dom';

const SubItems = (props) => {
	return (
		<div className="sub-item">
			{props.subLinks.map((subItem) => (
				<Link to="/" key={subItem.id}>
					<img src={subItem.img} alt={subItem.name} />
					<h3>{subItem.name}</h3>
				</Link>
			))}
		</div>
	);
};

export default SubItems;
