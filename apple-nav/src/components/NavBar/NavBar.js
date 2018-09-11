import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
export default class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <NavLink
          to="/mac"
          activeStyle={{
            color: 'lightGrey'
          }}
        >
          Mac
        </NavLink>
        <NavLink
          to="/ipad"
          activeStyle={{
            color: 'lightGrey'
          }}
        >
          iPad
        </NavLink>
        <NavLink
          to="/iphone"
          activeStyle={{
            color: 'lightGrey'
          }}
        >
          iPhone
        </NavLink>
        <NavLink
          to="/watch"
          activeStyle={{
            color: 'lightGrey'
          }}
        >
          Watch
        </NavLink>
        <NavLink
          to="/tv"
          activeStyle={{
            color: 'lightGrey'
          }}
        >
          TV
        </NavLink>
        <NavLink
          to="/music"
          activeStyle={{
            color: 'lightGrey'
          }}
        >
          Music
        </NavLink>
        <NavLink
          to="/support"
          activeStyle={{
            color: 'lightGrey'
          }}
        >
          Support
        </NavLink>
      </div>
    );
  }
}
