import React from 'react';
import { Link } from 'react-router-dom';
import Mac from './mac';
import IPad from './ipad';
import Home from './home';
import './navigation.css';


function Navigation() {
	return (
		<div className="links">
			<Link to='/'>Home</Link>
			<Link to='/mac'>Mac</Link>
			<Link to='/ipad'>iPad</Link>
		</div>
	);
}

export default Navigation;

