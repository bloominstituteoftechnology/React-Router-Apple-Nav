import React from 'react';
import { NavLink } from 'react-router-dom';

import './ReacNav.css';

export default class ReacNav extends React.Component {

	render() {
		return(
			<div className="ProductBar">
				<NavLink exact to="/reacbook" className="ProductBar__item">ReacBook</NavLink>
				<NavLink exact to="/reacbook-air" className="ProductBar__item">ReacBook Air</NavLink>
				<div className="ProductBar__item">ReacBook Pro</div>
				<div className="ProductBar__item">iReac</div>
				<div className="ProductBar__item">iReac Pro</div>
				<div className="ProductBar__item">Reac Pro</div>
				<div className="ProductBar__item">Reac mini</div>
				<div className="ProductBar__item">Raccessories</div>
				<div className="ProductBar__item">Righ Rierra</div>
				<div className="ProductBar__item">Rompare</div>
			</div>
		)
	}
}
