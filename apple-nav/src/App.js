import React, { Component } from 'react';
import {NavLink, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import dummyData from './data';
import Mac from './components/Mac/Mac';

export default class App extends Component {
  constructor(){
    super();
    this.state= {
      navData: dummyData
    }
  }

  render() {
    return (
      <div className="app">
        <div className="navbar">
            <NavLink className="navlink" to="/home"><i className="fab fa-apple"></i></NavLink>
            <NavLink className="navlink" to="/mac">Mac</NavLink>
            <NavLink className="navlink" to="/ipad">iPad</NavLink>
            <NavLink className="navlink" to="/iphone">iPhone</NavLink>
            <NavLink className="navlink" to="/watch">Watch</NavLink>
            <NavLink className="navlink" to="/tv">TV</NavLink>
            <NavLink className="navlink" to="/music">Music</NavLink>
            <NavLink className="navlink" to="/support">Support</NavLink>
            <NavLink className="navlink" to="/search"><i className="fas fa-search"></i></NavLink>
            <NavLink className="navlink" to="/cart"><i className="fas fa-shopping-bag"></i></NavLink>
       </div>
          <Route path="/home" component={Home}/>
          <Route path="/mac" component={Mac}/>
      </div>
    );
  }
}

