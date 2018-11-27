import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <nav className='navigation'>
        <div className='nav-links'>
          <NavLink to ='/'><i class="fab fa-apple"></i></NavLink>
          <NavLink to ='/'>Mac</NavLink>
          <NavLink to ='/'>iPad</NavLink>
          <NavLink to ='/'>iPhone</NavLink>
          <NavLink to ='/'>Watch</NavLink>
          <NavLink to ='/'>TV</NavLink>
          <NavLink to ='/'>Music</NavLink>
          <NavLink to ='/'>Support</NavLink>
          <NavLink to ='/'><i class="fas fa-search"></i></NavLink>
          <NavLink to ='/'><i class="fas fa-shopping-bag"></i></NavLink>
        </div>
      </nav>
      </div>
    );
  }
}

export default App;
