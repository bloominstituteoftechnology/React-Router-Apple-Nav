import React, { Component } from 'react';
import {Route, Link, NavLink} from 'react-router-dom';

import NavWrapper from './components/NavWrapper'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Route path="/" component={NavWrapper}/>
       <h1>React Router 2</h1>
      </div>
    );
  }
}

export default App;
