import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import Home from '../Home/Home';
import './Iphone.css';

class Iphone extends React.Component {
  render() {
		return (
			<div>
				<Home />
				<div className="container">
					<NavLink to="/iphone/iphonex" className="link" activeClassName="link--active">iPhone X</NavLink>
					<NavLink to="/iphone/iphone8" className="link" activeClassName="link--active">iPhone 8</NavLink>
					<NavLink to ="/iphone/iphone7" className = "link" activeClassName="link--active">iPhone 7</NavLink>
					<NavLink to ="/iphone/iphone6s" className = "link" activeClassName="link--active">iPhone 6s</NavLink>
					<NavLink to ="/iphone/iphonese" className = "link" activeClassName="link--active">iPhone SE</NavLink>
					<NavLink to="/iphone/ios11" className="link" >iOS 11</NavLink>
					<NavLink to="/iphone/accessories" className="link">Accessories</NavLink>
					<NavLink to="/iphone/compare" className="link">Compare</NavLink>
				</div>
			</div>
		);
  }
}

export default Iphone;