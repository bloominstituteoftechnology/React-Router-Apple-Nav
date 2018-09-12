import React from 'react';
import logo from '../images/logo.jpg';
import './Top-bar.css';
import { Link } from 'react-router-dom';

const TopBar = () => {
	return(
<div className="topBar">
<div className="container">
<Link to="/"><img src={logo} alt="apple logo" /></Link>
<Link to="/McDonalds/" className="links">macBook</Link>
<Link to="/iPad/" className="links">ipad</Link>
<Link to="/phone/" className="links">iphone</Link>
<Link to="/watch/" className="links">watch</Link>
<Link to="/tv/" className="links">tv</Link>
<Link to="/music/" className="links">music</Link>
<Link to="/support/" className="links">support</Link>
</div>
</div>
	);
}

export default TopBar;