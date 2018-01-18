import React from 'react';
import { NavLink } from 'react-router-dom';

import IReactNav from './../IReactNav/IReactNav'

import './IReact.css';

export default class IReact extends React.Component {

	render() {
		return(
			<div className="Product">
				<IReactNav />

				<h2 className="reduceMarginsHeader">iReact X</h2>
				<p>Say hello to the Reacture.</p>

				<div className="LinkContainer">
					<NavLink to="/ireact-x" className="Link">Learn more</NavLink>
					<div className="Link--carot"> ></div>
				</div>
			</div>
		)
	}
}
