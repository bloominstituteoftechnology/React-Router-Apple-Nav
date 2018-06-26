import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Menu from './data';
import NavWrapper from './components/Nav/NavWrapper';


class App extends Component {
  constructor() {
    super();
    this.state = {
      menu: Menu,
    }
  }
 
  
  render() {
    return (
      <div className="App">
      <Route exact path = '/' render={props=> (
        <NavWrapper {...props} />
      )} />
      </div>
    );
  }
}

export default App;
