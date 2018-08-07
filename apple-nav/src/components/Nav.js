import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";


import './Nav.css'

const NavBar = () => {
    return (
        <ul className = "navbar">
        <li>
          <NavLink exact activeClassName="activeNavButton" to = "/">
            Home
          </NavLink>
        </li>  
        <li>
          <NavLink activeClassName="activeNavButton" to = "/mac">
            Mac
          </NavLink>
        </li>  
        <li>
          <NavLink activeClassName="activeNavButton" to = "/ipad">
            ipad
          </NavLink>
        </li>  
        <li>
          <NavLink activeClassName="activeNavButton" to = "/phone">
            Phone
          </NavLink>
        </li>  
        <li>
          <NavLink activeClassName="activeNavButton" to = "/watch">
            Watch
          </NavLink>
        </li>  
        <li>
          <NavLink activeClassName="activeNavButton" to = "/tv">
            TV
          </NavLink>
        </li>  
        <li>
          <NavLink activeClassName="activeNavButton" to = "/music">
            Music
          </NavLink>
        </li>
      </ul>
    );
};


export default NavBar;


