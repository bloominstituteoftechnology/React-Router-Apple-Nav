import React from 'react';
import { Route, NavLink } from 'react-router-dom';

function IPadPro() {
	return (
		<div>
			<h1>IPad Pro</h1>
			<h3>Anything you can do, you can do better</h3>
		</div>
	);
}

function IPadV() {
	return (
		<div>
			<h1>iPad</h1>
			<h3>Flat-out fun.</h3>
		</div>
	);
}

function IPadMini() {
	return (
		<div>
			<h1>iPad mini 4</h1>
			<h3>Mighty.Small.</h3>
		</div>
	);
}

function IPad(props) {
	const { match } = props;
	return (
		<div>
			<h1>IPad Page</h1>
			<ul>
				<li className="navLink">
					<NavLink to={`${match.url}/pro`} activeClassName="navlink--selected">
						IPad Pro
					</NavLink>
				</li>
				<li>
					<NavLink to={`${match.url}/ipad-9.7`} activeClassName="navlink--selected">
						IPad
					</NavLink>
				</li>
				<li>
					<NavLink to={`${match.url}/ipad-mini-4`} activeClassName="navlink--selected">
						IPad Mini
					</NavLink>
				</li>
			</ul>

			<Route path={`${match.path}/pro`} component={IPadPro} />
			<Route path={`${match.path}/ipad-9.7`} component={IPadV} />
			<Route path={`${match.path}/ipad-mini-4`} component={IPadMini} />
		</div>
	);
}

export default IPad;
