import React from 'react';
import { Route } from 'react-router-dom';

import data from '../data';

import NavItem from './NavItem';
import SubMenu from './SubMenu';

class NavWrapper extends React.Component {
	constructor() {
		super();
		this.state = {
			navData : data
		};
	}

	// componentDidMount() {
	// 	this.setState({
	// 		navData : data
	// 	});
	// }

	render() {
		return (
			<div className="nav-wrapper">
				<Route path="/" render={() => <NavItem links={this.state.navData} />} />

				{/* {this.state.navData.map((item) => <NavItem key={item.id} item={item} />)} */}

				<Route
					exact
					path="/sub-links/:name"
					render={(props) => <SubMenu {...props} data={this.state.navData} />}
				/>
			</div>
		);
	}
}

export default NavWrapper;
