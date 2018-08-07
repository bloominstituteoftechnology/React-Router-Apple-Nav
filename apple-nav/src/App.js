import React, { Component } from 'react';
import './App.css';
import NavContainer from './Components/NavContainer';
import { Route } from 'react-router-dom';
import SubNav from './Components/SubNav';
import Home from './Components/Home';
import Product from './Components/Product';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavContainer />
        <div className="app-container">
          <Route exact path="/" component={Home} />
          <Route path="/:productClass" component={SubNav} />
          <Route path="/:productClass/:product" component={Product} />
        </div>
      </div>
    );
  }
}

export default App;
