import React, { Component } from 'react';
import Nav from './Nav';
import './nav.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

export default class NavWrapper extends Component {
    
    render() {
        return(
            <div className="nav-wrap">
                <Nav />
                <Nav />
                <Nav />
                <Nav />
                <Nav />
                <Nav />
                <Nav />
            </div>
        );
    }

}