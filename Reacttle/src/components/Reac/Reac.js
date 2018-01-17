import React from 'react';

import ReacNav from './../ReacNav/ReacNav';

import './Reac.css';

export default class Reac extends React.Component {

	render() {
		return(
			<div className="Reac">
				<ReacNav />

				<h2>iReac Pro</h2>
				<p>Power to the Reac.</p>
			</div>
		)
	}
}
