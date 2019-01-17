import React, { Component } from 'react';
import Nav from './components/Nav';
import SubNav from './components/SubNav';
import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Nav} />
        <Route path="/:category" component={SubNav} />
      </div>
    );
  }
}

export default App;
