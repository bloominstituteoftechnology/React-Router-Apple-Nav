import React from 'react';

import ReacNav from './../ReacNav/ReacNav';

import './Reac.css';

export default class Reac extends React.Component {

	render() {
		return (
			<div className="ProductLine">
				<ReacNav />

				<div className="ProductLine__item">
					<h2>iReac Pro</h2>
					<p>Power to the Reac.</p>
				</div>

				<hr/>

				<div className="ProductLine__item">
					<h2>iReac</h2>
					<p>The Reac is brigher than ever.</p>
				</div>
			</div>
		)
	}
}
