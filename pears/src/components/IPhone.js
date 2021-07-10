import React from 'react';
import { Route, NavLink } from 'react-router-dom';

function IPhoneX() {
	return (
		<div>
			<h1>IPhone X</h1>
			<h3>Say hello to the future.</h3>
		</div>
	);
}

function IPhone8() {
	return (
		<div>
			<h1>iPhone 8</h1>
			<h3>A beautiful mind.</h3>
		</div>
	);
}

function IPhone7() {
	return (
		<div>
			<h1>iPhone 7</h1>
			<h3>This one is old, so no cool catch phrase.</h3>
		</div>
	);
}

function IPhone(props) {
	const { match } = props;
	return (
		<div>
			<h1>IPhone Page</h1>
			<ul>
				<li className="navLink">
					<NavLink to={`${match.url}/iphone-x`} activeClassName="navlink--selected">
						IPhone X
					</NavLink>
				</li>
				<li>
					<NavLink to={`${match.url}/iphone-8`} activeClassName="navlink--selected">
						IPhone 8
					</NavLink>
				</li>
				<li>
					<NavLink to={`${match.url}/iphone-7`} activeClassName="navlink--selected">
						IPhone 7
					</NavLink>
				</li>
			</ul>

			<Route path={`${match.path}/iphone-x`} component={IPhoneX} />
			<Route path={`${match.path}/iphone-8`} component={IPhone8} />
			<Route path={`${match.path}/iphone-7`} component={IPhone7} />
		</div>
	);
}

export default IPhone;

