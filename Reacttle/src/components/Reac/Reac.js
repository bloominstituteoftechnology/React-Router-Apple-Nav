import React from 'react';
import { NavLink } from 'react-router-dom';

import ReacNav from './../ReacNav/ReacNav';

import './Reac.css';

export default class Reac extends React.Component {

	render() {
		return (
			<div className="ProductLine">
				<ReacNav />

				<div className="ReacPage__IReacPro">
					<div className="ProductLine__item">
						<h2 className="ReacPage__IReacPro__text">iReac Pro</h2>
						<p className="ReacPage__IReacPro__text">Power to the React.</p>

						<br />

						<div className="LinkContainer">
							<NavLink to="/ireac-pro" className="Link">Learn more</NavLink>
							<div className="Link--carot"> ></div>
						</div>
					</div>
				</div>

				<div className="ProductLine__item">
					<h2>iReac</h2>
					<p>The Reac is brigher than ever.</p>

					<br />

					<div className="LinkContainer">
							<NavLink to="/ireac" className="Link">Learn more</NavLink>
							<div className="Link--carot"> ></div>
						</div>
				</div>
			</div>
		)
	}
}
