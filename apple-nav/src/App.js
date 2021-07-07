import React, { Component } from 'react';
import './App.css';
import {  Route, Link } from 'react-router-dom';
import NavWrapper from './components/NavWrapper';
import Nav from './components/Nav';
import SubNav from './components/SubNav';

class App extends Component {

  render() {
    return (
      <div className="App">
      <Route path="/" render={props => (<NavWrapper {...props} />)} />
      </div>
    );
  }
}

export default App;
