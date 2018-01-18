import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

import logo from './../../logo.svg';

import './NavBar.css';

class NavBar extends React.Component {
	render() {
		console.log(this.props)

		const checkReac = () => {
			const currentPath = this.props.location.pathname;
			const reacPaths = [
				'/reac',
				'/reacbook',
				'/reacbook-air',
				'/reacbook-pro',
				'/ireac',
				'/ireac-pro',
				'/reac-pro',
				'/reac-mini',
				'/shop/reac/reac-acessories',
				'/reacos/high-rierra',
				'/reac/compare',
			];


			return reacPaths.includes(currentPath)
		}

		return(
			<div className="NavBar">
				<NavLink to="/" className="NavBar__item--logo"><img src={logo} alt="logo" /></NavLink>
				<NavLink to="/reac" isActive={checkReac} className="NavBar__item" activeClassName="NavLink--selected">Reac</NavLink>
				<NavLink to="/iract" isActive={this.checkRender} className="NavBar__item" activeClassName="NavLink--selected">iRact</NavLink>
				<NavLink to="/ireact" isActive={this.checkRender} className="NavBar__item" activeClassName="NavLink--selected">iReact</NavLink>
				<div className="NavBar__item">iWeact</div>
				<div className="NavBar__item">iRT</div>
				<div className="NavBar__item">Rusic</div>
				<div className="NavBar__item">Rupport</div>
				<div className="NavBar__item">Rearch</div>
				<div className="NavBar__item">Shopping</div>
			</div>
		)
	}
}

export default withRouter(NavBar);