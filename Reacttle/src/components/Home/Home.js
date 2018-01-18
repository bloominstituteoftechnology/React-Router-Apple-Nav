import React from 'react';
import { NavLink } from 'react-router-dom';

import './Home.css';

export default class Home extends React.Component {

	render() {
		return(
			<div className="Home">
				<NavLink to="/ireact-x" className="HomePage__ireactx">
					<h2 className="reduceMarginsHeader">iReact X</h2>
					<p>Say hello to the Reacture.</p>
				</NavLink>

				<NavLink to="/ireact-8" className="HomePage__ireact8">
					<h2 className="reduceMarginsHeader">iReact 8</h2>
					<p>A new generation of iReact</p>
				</NavLink>
			</div>
		)
	}
}
