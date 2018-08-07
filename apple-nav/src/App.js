import React, { Component } from 'react';
import {NavLink, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="navbar">
          <div className='navlink'>
            <NavLink exact to="/"><i class="fab fa-apple"></i></NavLink>
            <NavLink to="/mac">Mac</NavLink>
            <NavLink to="/ipad">iPad</NavLink>
            <NavLink to="/iphone">iPhone</NavLink>
            <NavLink to="/watch">Watch</NavLink>
            <NavLink to="/tv">TV</NavLink>
            <NavLink to="/music">Music</NavLink>
            <NavLink to="/support">Support</NavLink>
            <NavLink to="/search"><i class="fas fa-search"></i></NavLink>
            <NavLink to="/cart"><i class="fas fa-shopping-bag"></i></NavLink>
          </div>
          <Route path="/" Component={Home}/>
        </div>
      </div>
    );
  }
}

export default App;
