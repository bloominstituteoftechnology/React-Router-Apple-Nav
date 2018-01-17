import React from 'react';

import IRactNav from './../IRactNav/IRactNav';

import './IRact.css';

export default class IRact extends React.Component {

	render() {
		return (
			<div className="ProductLine">
				<IRactNav />

				<div className="ProductLine__item">
					<h2>iRact Pro</h2>
					<p>
						Anything you can Ract,<br />
						Ract can do better.
					</p>
				</div>

				<hr/>

				<div className="ProductLine__item">
					<h2>iRact</h2>
					<p>Flat-out Ract</p>
				</div>
			</div>
		)
	}
}
