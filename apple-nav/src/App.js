import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavWrapper from './components/NavWrapper';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={NavWrapper} />
        <Route path="/:name" render={props =>
          <Nav {...props} />
        } />
      </div>
    );
  }
}

export default App;
