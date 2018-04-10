import React, { Component } from 'react';
import './App.css';
import { HeaderNav } from './components/HeaderNav';
import { Products } from './components/Products';
import { Route } from 'react-router-dom';
import { Navbar } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderNav />
        <Products />
      </div>
    );
  }
}

export default App;
