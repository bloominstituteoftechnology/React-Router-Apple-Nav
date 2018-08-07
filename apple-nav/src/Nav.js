import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { Route, Link, NavLink } from "react-router-dom";
import SubNav from "./SubNav";
const navItems = [
    {name: "home",id: 0},
    {name: "mac", id: 1 },
    {name: "ipad", id: 2 },
    {name: "iphone", id: 3 },
    {name: "watch", id: 4 },
    {name: "tv", id: 5 },
    {name: "music", id: 6},

]
const Nav=(props) =>{
  return (
    <div className="nav-bar">
    {navItems.map(item =>
        <div>
            <NavLink to={`/${item.name}`}>
            {item.name}
            </NavLink>
        </div>
        )}
    </div>
  ); 
};
export default Nav;
