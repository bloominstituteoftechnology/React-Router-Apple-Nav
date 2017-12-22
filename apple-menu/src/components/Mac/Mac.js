import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import Home from '../Home/Home';
import './Mac.css';

class Mac extends React.Component {
  render() {
		return (
			<div className="Mac">
				<Home />
				<div className="container">
					<NavLink to="/mac/macbook" className="link" activeClassName="link--active">Macbook</NavLink>
					<NavLink to="/mac/macbookair" className="link" activeClassName="link--active">Macbook Air</NavLink>
					<NavLink to ="/mac/macbookpro" className = "link" activeClassName="link--active">Macbook Pro</NavLink>
					<NavLink to="/mac/imac" className="link" >Imac</NavLink>
					<NavLink to="/mac/imacpro" className="link">Imac Pro</NavLink>
					<NavLink to="/mac/macpro" className="link">Mac Pro</NavLink>
					<NavLink to="/mac/macmini" className="link">Mac mini</NavLink>
					<NavLink to="/mac/accessories" className="link">Accessories</NavLink>
					<NavLink to="/mac/highsierra" className="link">High Sierra</NavLink>
					<NavLink to="/mac/compare" className="link">Compare</NavLink>
				</div>
			</div>
		);
	}
}

export default Mac;