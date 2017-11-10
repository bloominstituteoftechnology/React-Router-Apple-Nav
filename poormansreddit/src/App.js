import React, { Component } from 'react';
import logo from './logo.svg';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Navigation from './components/Navigation'
import './App.css';
class App extends Component {
  render() {
    return (
      <div>
      <Navigation/>
      <h1> I am Home! </h1> 
      </div>
    );
  }
}

export default App;
