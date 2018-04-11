import React, { Component } from 'react';
import './App.css';
import { HeaderNav } from './components/HeaderNav';
import { Products } from './components/Products';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={HeaderNav} />
        <Route path="/mac" component={Products} />
      </div>
    );
  }
}

export default App;
