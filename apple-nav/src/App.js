import React, { Component } from 'react';
import NavWrapper from './components/NavWrapper';
import Nav from './components/Nav';
import Home from './components/Home';
import logo from './logo.svg';
import './App.css';
import {Link, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
            <NavWrapper />  
      </div>
    );
  }
}

export default App;
