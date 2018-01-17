import React from 'react';
import { NavLink } from 'react-router-dom';

import './ReacNav.css';

export default class ReacNav extends React.Component {

	render() {
		return(
			<div className="ProductBar">
				<NavLink exact to="/reacbook" className="ProductBar__item" activeClassName="NavLink--selected">ReacBook</NavLink>
				<div className="ProductBar__item">iPad</div>
				<div className="ProductBar__item">iPhone</div>
				<div className="ProductBar__item">Watch</div>
				<div className="ProductBar__item">TV</div>
				<div className="ProductBar__item">Music</div>
				<div className="ProductBar__item">Search</div>
			</div>
		)
	}
}
