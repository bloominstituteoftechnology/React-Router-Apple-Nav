import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from './../../logo.svg';

import './NavBar.css';

export default class NavBar extends React.Component {

	render() {
		return(
			<div className="NavBar">
				<NavLink exact to="/" className="NavBar__item--logo" activeClassName="NavLink--selected"><img src={logo} alt="logo" /></NavLink>
				<NavLink exact to="/reac" className="NavBar__item" activeClassName="NavLink--selected">Reac</NavLink>
				<NavLink exact to="/iract" className="NavBar__item" activeClassName="NavLink--selected">iRact</NavLink>
				<div className="NavBar__item">iReact</div>
				<div className="NavBar__item">iWeact</div>
				<div className="NavBar__item">iRT</div>
				<div className="NavBar__item">Rusic</div>
				<div className="NavBar__item">Rupport</div>
				<div className="NavBar__item">Rearch</div>
				<div className="NavBar__item">Rhopping</div>
			</div>
		)
	}
}
