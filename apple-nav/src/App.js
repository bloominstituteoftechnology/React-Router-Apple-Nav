import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavWrapper from './components/NavWrapper';
import SubNav from './components/SubNav';

class App extends Component {
  render() {
    return (
      <div>
        <NavWrapper />
        <Route path="/:name" render={props =>
          <SubNav {...props} />
        } />
      </div>
    );
  }
}

export default App;
