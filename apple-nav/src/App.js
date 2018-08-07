import React, { Component } from 'react';
import './App.css';
import {Route, Link, NavLink} from 'react-router-dom';
import Nav from './components/NavBar/Nav';

class App extends Component {
  render() {
    return (
      <NavLink>
        <Nav />
      </NavLink>
    );
  }
}

export default App;
