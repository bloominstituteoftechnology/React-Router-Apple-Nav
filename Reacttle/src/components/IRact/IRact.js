import React from 'react';

import IRactNav from './../IRactNav/IRactNav';
import IRactPro from './../IRactPro/IRactPro';

import './IRact.css';

export default class IRact extends React.Component {

	render() {
		return (
			<div className="ProductLine">
				<IRactNav />

				<IRactPro />

				<hr/>

				<div className="ProductLine__item">
					<h2>iRact</h2>
					<p>Flat-out Ract</p>
				</div>
			</div>
		)
	}
}
