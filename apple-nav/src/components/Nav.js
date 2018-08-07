import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";


const NavBar = () => {
    return (
        <ul className = "navbar">
        <li>
          <NavLink exact activeClassName="activeNavButton" to = "/">
            Home
          </NavLink>
        </li>  
        <li>
          <NavLink exact activeClassName="activeNavButton" to = "/">
            Home
          </NavLink>
        </li>  
        <li>
          <NavLink exact activeClassName="activeNavButton" to = "/">
            Home
          </NavLink>
        </li>  
        <li>
          <NavLink exact activeClassName="activeNavButton" to = "/">
            Home
          </NavLink>
        </li>  
        <li>
          <NavLink exact activeClassName="activeNavButton" to = "/">
            Home
          </NavLink>
        </li>  
      </ul>
    );
};


export default NavBar;


