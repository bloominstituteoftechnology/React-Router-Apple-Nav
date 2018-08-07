import React from 'react';
import Nav from './Nav';
import { BrowserRouter as Router, NavLink} from "react-router-dom";
import '../App.css';

const NavWrapper = () => {
    return ( 
        <div className="navbar-container">
            <ul className="navbar">
                <li>
                    <NavLink exact activeClassName="activeNavButton" to="/">Apple Logo</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="activeNavButton" to="/mac">Mac</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="activeNavButton" to="/ipad">iPad</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="activeNavButton" to="/iphone">iPhone</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="activeNavButton" to="/watch">Watch</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="activeNavButton" to="/tv">TV</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="activeNavButton" to="/music">Music</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="activeNavButton" to="/support">Support</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="activeNavButton" to="/search">Search</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="activeNavButton" to="/bag">Bag</NavLink>
                </li>
            </ul>
        </div>        
    );
}
 
export default NavWrapper;