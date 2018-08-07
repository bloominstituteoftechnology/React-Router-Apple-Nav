import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { Route, Link, NavLink } from "react-router-dom";

const Nav = props => {
  return (
    <div>
      <div className="nav-bar">
        <div>
            <NavLink className="item" to="/">
            Home
            </NavLink>
        </div>
        <div>
            <NavLink className="item"  to="/mac">
            Mac
            </NavLink>
        </div>
        <div>
            <NavLink className="item"  to="/ipad">
            iPad
            </NavLink>
        </div>
        <div>
            <NavLink className="item"  to="/iphone">
            iPhone
            </NavLink>
        </div>
        <div>
            <NavLink className="item"  to="/watch">
            Watch
            </NavLink>
        </div>
        <div>
            <NavLink className="item"  to="/tv">
            TV
            </NavLink>
        </div>
        <div>
            <NavLink className="item"  to="/music">
            Music
            </NavLink>
        </div>
      </div>
    </div>
  ); 
};

export default Nav;
