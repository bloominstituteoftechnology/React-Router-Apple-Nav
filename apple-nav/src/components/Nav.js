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
          <i class="fab fa-apple"></i>
          </NavLink>
        </li>  
        <li>
          <NavLink activeClassName="activeNavButton" to = "/mac">
          <i class="fas fa-laptop">  mac</i>
          </NavLink>
        </li>  
        <li>
          <NavLink activeClassName="activeNavButton" to = "/ipad">
          <i class="fas fa-tablet-alt">  ipad</i>
          </NavLink>
        </li>  
        <li>
          <NavLink activeClassName="activeNavButton" to = "/phone">
          <i class="fas fa-mobile-alt">  phone</i>
          </NavLink>
        </li>  
        <li>
          <NavLink activeClassName="activeNavButton" to = "/watch">
          <i class="far fa-clock"> watch</i>
          </NavLink>
        </li>  
        <li>
          <NavLink activeClassName="activeNavButton" to = "/tv">
          <i class="fas fa-tv"> TV</i>
          </NavLink>
        </li>  
        <li>
          <NavLink activeClassName="activeNavButton" to = "/music">
          <i class="fas fa-music"> music</i>
          </NavLink>
        </li>
      </ul>
    );
};


export default NavBar;


