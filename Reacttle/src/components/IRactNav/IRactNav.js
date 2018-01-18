import React from 'react';
import { NavLink } from 'react-router-dom';

import './IRactNav.css';

export default class iRactNav extends React.Component {

	render() {
		return(
			<div className="ProductBar">
				<NavLink to="/iract-pro" className="ProductBar__item">iRact Pro</NavLink>
				<NavLink to="/iract-1.0" className="ProductBar__item">iRact</NavLink>
				<div to="/iract-mini" className="ProductBar__item">iRact mini</div>
				<NavLink to="/iRT/iRT-11" className="ProductBar__item">iRT 11</NavLink>
				<div to="/shop/iract/iract-accessories" className="ProductBar__item">Accessories</div>
				<div to="/iract/compare" className="ProductBar__item">Compare</div>
			</div>
		)
	}
}
