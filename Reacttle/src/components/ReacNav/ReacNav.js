import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import ReacBook from './../ReacBook/ReacBook';

import './ReacNav.css';

export default class ReacNav extends React.Component {
	render() {
		console.log(this.props);
		return(
			<div className="ProductBar">
				<NavLink to="/reac/reacbook" className="ProductBar__item">ReacBook</NavLink>
				<NavLink to="/reac/reacbook-air" className="ProductBar__item">ReacBook Air</NavLink>
				<NavLink to="/reac/reacbook-pro" className="ProductBar__item">ReacBook Pro</NavLink>
				<div className="ProductBar__item">iReac</div>
				<div className="ProductBar__item">iReac Pro</div>
				<div className="ProductBar__item">Reac Pro</div>
				<div className="ProductBar__item">Reac mini</div>
				<div className="ProductBar__item">Raccessories</div>
				<div className="ProductBar__item">Righ Rierra</div>
				<div className="ProductBar__item">Rompare</div>

				<Route path="/reac/reacbook" component={ReacBook} />
			</div>
		)
	}
}
