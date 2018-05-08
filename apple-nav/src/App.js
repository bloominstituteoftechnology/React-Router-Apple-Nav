import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { NavWrapper, Nav, SubNav } from './components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={NavWrapper} />
        <Route path="/nav" component={Nav} />
        <Route path="/subnav" component={SubNav} />
      </div>
    );
  }
}

export default App;
