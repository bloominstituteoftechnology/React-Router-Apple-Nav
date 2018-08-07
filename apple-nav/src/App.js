import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {Route, Link, NavLink} from 'react-router-dom'; 
import NavWrapper from './NavWrapper'; 

class App extends Component {
  render() {
    return (
   <div>
     <NavWrapper />
   </div>
    );
  }
}

export default App;
