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
				<div className="NavBar__item">iPad</div>
				<div className="NavBar__item">iPhone</div>
				<div className="NavBar__item">Watch</div>
				<div className="NavBar__item">TV</div>
				<div className="NavBar__item">Music</div>
				<div className="NavBar__item">Search</div>
			</div>
		)
	}
}
