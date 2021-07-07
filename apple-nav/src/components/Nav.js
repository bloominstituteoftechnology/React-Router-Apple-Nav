import React from 'react';
import { BrowserRouter as Router, NavLink} from "react-router-dom";

const Nav = (props) => {
    return (
        <div>
            <ul className="navbar">               
                <li className="navbartabs">
                    <NavLink exact activeClassName="activeNavButton" to="/"><img src="https://www.apple.com/ac/globalnav/3/en_US/images/globalnav/apple/image_large.svg" alt="apple logo"/></NavLink>
                    {props.appleitems.navbartitles.map(item => ( <NavLink activeClassName="activeNavButton" to={`/${item}/`} className="navbartab">{item}</NavLink>))}
                    <NavLink activeClassName="activeNavButton" to="/"><img src="https://www.apple.com/ac/globalnav/3/en_US/images/globalnav/search/image_large.svg" alt="search icon"/></NavLink>
                    <NavLink activeClassName="activeNavButton" to="/"><img src="https://www.apple.com/ac/globalnav/3/en_US/images/globalnav/bag/image_large.svg" alt="purchase bag icon"/></NavLink>
                </li>               
            </ul>
        </div>
    );
}
 
export default Nav;