import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLinks = (props) => {
	return (
		<React.Fragment>
			{props.list.map((links, index) => (
				<NavLink to={links.name} activeStyle={{ opacity: 0.5 }} key={index}>
					<img src={links.image} alt={links.name}/>
				</NavLink>
			))}
			
		</React.Fragment>
	);
};

export default NavLinks;

NavLinks.propTypes = {
	list: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			image: PropTypes.string,
			subLink: PropTypes.array
		})
	)
};
