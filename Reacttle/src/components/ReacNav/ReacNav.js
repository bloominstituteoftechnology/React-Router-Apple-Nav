import React from 'react';
import { NavLink } from 'react-router-dom';

import './ReacNav.css';

export default class ReacNav extends React.Component {
	render() {
		return(
			<div className="ProductBar">
				<NavLink to="/reacbook" className="ProductBar__item">ReacBook</NavLink>
				<NavLink to="/reacbook-air" path="/reac/reacbook-air" className="ProductBar__item">ReacBook Air</NavLink>
				<NavLink to="/reacbook-pro" className="ProductBar__item">ReacBook Pro</NavLink>
				<NavLink to="/ireac" className="ProductBar__item">iReac</NavLink>
				<NavLink to="/ireac-pro"className="ProductBar__item">iReac Pro</NavLink>
				<NavLink to="/reac-pro"className="ProductBar__item">Reac Pro</NavLink>
				<NavLink to="/reac-mini"className="ProductBar__item">Reac mini</NavLink>
				<NavLink to="/shop/reac/reac-acessories"className="ProductBar__item">Accessories</NavLink>
				<NavLink to="/reacos/high-rierra"className="ProductBar__item">High Rierra</NavLink>
				<NavLink to="/reac/compare"className="ProductBar__item">Compare</NavLink>
			</div>
		)
	}
}

