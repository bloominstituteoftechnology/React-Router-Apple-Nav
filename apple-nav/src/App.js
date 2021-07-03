import React, { Component } from 'react';
import './App.css';
import { HeaderNav } from './components/HeaderNav';
import { MACproducts } from './components/mac/MACproducts';
import { IPADproducts } from './components/ipad/IPADproducts';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={HeaderNav} />
        <Route path="/mac" component={MACproducts} />
        <Route path="/ipad" component={IPADproducts} />
      </div>
    );
  }
}

export default App;
