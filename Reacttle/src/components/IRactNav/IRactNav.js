import React from 'react';
import { NavLink } from 'react-router-dom';

import './IRactNav.css';

export default class iRactNav extends React.Component {

	render() {
		return(
			<div className="ProductBar">
				<NavLink exact to="/iract-pro" className="ProductBar__item">iRact Pro</NavLink>
				<div className="ProductBar__item">iRact</div>
				<div className="ProductBar__item">iRact mini</div>
				<div className="ProductBar__item">iRT 11</div>
				<div className="ProductBar__item">Raccessories</div>
				<div className="ProductBar__item">Rompare</div>
			</div>
		)
	}
}
