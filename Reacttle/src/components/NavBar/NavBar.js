import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

import logo from './../../logo.svg';

import './NavBar.css';

class NavBar extends React.Component {
	render() {
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

			return reacPaths.includes(currentPath);
		};

		const checkIract = () => {
			const currentPath = this.props.location.pathname;
			const iractPaths = [
				'/iract',
				'/iract-pro',
				'/iract-1.0',
				'/iract-mini',
				'/iract/iRT/iRT-1',
				'/shop/iract/iract-acessories',
				'/iract/compare',
			];

			return iractPaths.includes(currentPath);
		};

		const checkIreact = () => {
			const currentPath = this.props.location.pathname;
			const ireactPaths = ['/ireact', '/ireact-x'];

			return ireactPaths.includes(currentPath);
		};

		return (
			<div className="NavBar">
				<NavLink to="/" className="NavBar__item--logo">
					<img src={logo} alt="logo" />
				</NavLink>
				<NavLink
					to="/reac"
					isActive={checkReac}
					className="NavBar__item"
					activeClassName="NavLink--selected"
				>
					Reac
				</NavLink>
				<NavLink
					to="/iract"
					isActive={checkIract}
					className="NavBar__item"
					activeClassName="NavLink--selected"
				>
					iRact
				</NavLink>
				<NavLink
					to="/ireact"
					isActive={checkIreact}
					className="NavBar__item"
					activeClassName="NavLink--selected"
				>
					iReact
				</NavLink>
				<div className="NavBar__item">iWeact</div>
				<div className="NavBar__item">iRT</div>
				<div className="NavBar__item">Music</div>
				<div className="NavBar__item">Support</div>
				<div className="NavBar__item">Search</div>
				<div className="NavBar__item">Shopping</div>
			</div>
		);
	}
}

export default withRouter(NavBar);
