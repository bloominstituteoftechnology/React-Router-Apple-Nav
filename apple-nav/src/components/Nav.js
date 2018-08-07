import React from 'react';
import { BrowserRouter as Router, NavLink} from "react-router-dom";

const Nav = (props) => {
    return (
        <div>
            <ul className="navbar">
                <li>
                    <NavLink exact activeClassName="activeNavButton" to="/"><img src="https://www.apple.com/ac/globalnav/3/en_US/images/globalnav/apple/image_large.svg" alt="apple logo"/></NavLink>
                </li>
                <li>
                    <NavLink activeClassName="activeNavButton" to="/mac/">Mac</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="activeNavButton" to="/ipad/">iPad</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="activeNavButton" to="/iphone/">iPhone</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="activeNavButton" to="/watch/">Watch</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="activeNavButton" to="/tv/">TV</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="activeNavButton" to="/music/">Music</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="activeNavButton" to="/support/">Support</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="activeNavButton" to="/search/"><img src="https://www.apple.com/ac/globalnav/3/en_US/images/globalnav/search/image_large.svg" alt="search icon"/></NavLink>
                </li>
                <li>
                    <NavLink activeClassName="activeNavButton" to="/bag/"><img src="https://www.apple.com/ac/globalnav/3/en_US/images/globalnav/bag/image_large.svg" alt="purchase bag icon"/></NavLink>
                </li>
            </ul>
        </div>
    );
}
 
export default Nav;