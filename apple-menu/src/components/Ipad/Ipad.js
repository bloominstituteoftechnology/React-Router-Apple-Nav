import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import Home from '../Home/Home';
import './Ipad.css';

class Ipad extends React.Component {
  render() {
		return (
			<div>
				<Home />
				<div className="container">
					<NavLink to="/ipad/ipadpro" className="link" activeClassName="link--active">Ipad Pro</NavLink>
					<NavLink to="/ipad/ipad" className="link" activeClassName="link--active">Ipad</NavLink>
					<NavLink to ="/ipad/ipadmini" className = "link" activeClassName="link--active">Ipad Mini</NavLink>
					<NavLink to="/ipad/ios11" className="link" >iOS 11</NavLink>
					<NavLink to="/ipad/accessories" className="link">Accessories</NavLink>
					<NavLink to="/ipad/compare" className="link">Compare</NavLink>
				</div>
			</div>
		);
  }
}

export default Ipad;