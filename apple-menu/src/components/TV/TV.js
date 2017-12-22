import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import Home from '../Home/Home';
import './TV.css';

class TV extends React.Component {
  render() {
		return (
			<div>
				<Home />
				<div className="container">
					<NavLink to="/tv/appletv4k" className="link" activeClassName="link--active">Apple TV 4K</NavLink>
					<NavLink to="/yv/appletv" className="link" activeClassName="link--active">Apple TV</NavLink>
					<NavLink to ="/tv/tvapp" className = "link" activeClassName="link--active">TV App</NavLink>
					<NavLink to="/tv/accessories" className="link">Accessories</NavLink>
					<NavLink to="/tv/compare" className="link">Compare</NavLink>
				</div>
			</div>
		);
  }
}

export default TV;