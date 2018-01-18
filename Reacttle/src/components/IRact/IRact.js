import React from 'react';
import { NavLink } from 'react-router-dom';

import IRactNav from './../IRactNav/IRactNav';

import './IRact.css';

export default class IRact extends React.Component {
	render() {
		return (
			<div className="ProductLine">
				<IRactNav />

				<div className="IRactPage--IRactPro">
					<div className="ProductLine__item">
						<h2>iRact Pro</h2>
						<p>
							Anything you can Ract,<br />
							React can do better.
						</p>

						<br />

						<div className="LinkContainer">
							<NavLink to="/iract-pro" className="Link">
								Learn more
							</NavLink>
							<div className="Link--carot"> ></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
