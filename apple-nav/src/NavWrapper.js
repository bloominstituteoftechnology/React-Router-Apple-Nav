import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {Route, Link, NavLink} from 'react-router-dom';
import Nav from './Nav';  

export default class NavWrapper extends Component {
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return(
            <div className="header">
            <Nav />
            </div>
        )
    }

}
