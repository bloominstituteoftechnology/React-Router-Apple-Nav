import React from 'react';
import { Link } from 'react-router-dom';
import MacBook from './macbook';
import IMac from './imac';

function MacNav() {
	return (
		<div className="links">
			<Link to='/mac/macbook'>MacBook</Link>
			<Link to='/mac/imac'>IMac</Link>
		</div>
	);
}

export default MacNav;

