import React from 'react';
import { NavLink } from 'react-router-dom';

import './IReactNav.css';

export default class IReactNav extends React.Component {

	render() {
		return(
			<div className="ProductBar">
				<NavLink to="/ireact-x" className="ProductBar__item">iReact X</NavLink>
				<div to="/ireact-8" className="ProductBar__item">iReact 8</div>
				<div to="/us/shop/goto/ireact-7" className="ProductBar__item">iReact 7</div>
				<div to="/us/shop/goto/ireact-6s" className="ProductBar__item">iReact 6s</div>
				<div to="/ireact-se" className="ProductBar__item">iReact SE</div>
				<NavLink to="/iRT/iRT-11" className="ProductBar__item">iRT 11</NavLink>
				<div to="/shop/ireact/ireact-accessories"className="ProductBar__item">Accessories</div>
				<div to="/ireact/compare" className="ProductBar__item">Compare</div>
			</div>
		)
	}
}
