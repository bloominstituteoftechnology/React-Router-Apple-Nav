import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import Home from '../Home/Home';
import './Watch.css';

class Watch extends React.Component {
  render() {
		return (
			<div>
				<Home />
				<div className="container">
					<NavLink to="/watch/watch3" className="link" activeClassName="link--active">Apple Watch 3</NavLink>
					<NavLink to="/watch/watchnike" className="link" activeClassName="link--active">Apple Watch Nike+</NavLink>
					<NavLink to ="/watch/watchhermes" className = "link" activeClassName="link--active">Apple Watch Hermes</NavLink>
					<NavLink to ="/watch/watchedition" className = "link" activeClassName="link--active">Apple Watch Edition</NavLink>
					<NavLink to ="/watch/watch1" className = "link" activeClassName="link--active">Apple Watch 1</NavLink>
					<NavLink to="/watch/watchos" className="link" >watchOS</NavLink>
					<NavLink to="/watch/bands" className="link" >Bands</NavLink>
					<NavLink to="/watch/accessories" className="link">Accessories</NavLink>
					<NavLink to="/watch/compare" className="link">Compare</NavLink>
				</div>
			</div>
		);
  }
}

export default Watch;