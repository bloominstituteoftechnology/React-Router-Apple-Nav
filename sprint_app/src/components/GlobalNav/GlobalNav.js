import './GlobalNav.css';
import React, { Component } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

class GlobalNav extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div className='GlobalNav'>
        <ul>
          <li>
            <NavLink to='/' className='GlobalNav__NavLink'>AppleLogo</NavLink>
          </li>
          <li>
            <NavLink to='/mac' className='GlobalNav__NavLink'>Mac</NavLink>
          </li>
          <li>
            iPad
          </li>
          <li>
            iPhone
          </li>
          <li>
            Watch
          </li>
          <li>
            TV
          </li>
          <li>
            Music
          </li>
          <li>
            Support
          </li>
          <li>
            Search
            </li>
          <li>
            <NavLink to='/' className='GlobalNav__NavLink'>Bag</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default GlobalNav;