import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
	render() {
		return (
			<div className="navbar navbar-default container">
				<div>
					<Link to="/" className="link">Apple</Link>
        	<Link to="/mac" className="link">Mac</Link>
          <Link to="/ipad" className="link">iPad</Link>
        	<Link to="/iphone" className="link">iPhone</Link>
          <Link to="/watch" className="link">Watch</Link>
          <Link to="/tv" className="link">TV</Link>
          <Link to="/music" className="link">Music</Link>
          <Link to="/support" className="link">Support</Link>
        	<Link to="/find" className="link">Find</Link>
          <Link to="/cart" className="link">Cart</Link>
        </div>
      </div>
    );
  }
}

export default Header;