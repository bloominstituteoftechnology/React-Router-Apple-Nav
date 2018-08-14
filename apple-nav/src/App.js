import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './App.css';

import Nav from './Components/Nav';
import SubNav from './Components/SubNav';

const menuData = [
  {name: 'Mac',
  id: 1,
  products: ['MacBook', 'MacBook Air', 'MacBook Pro', 'iMac', 'iMac Pro', 'Mac Pro', 'Mac mini']},
  {name: 'iPad',
  id: 2,
  products: ['iPad Pro', 'iPad', 'iPad mini 4', 'Accessories']},
  {name: 'iPhone',
  id: 3,
  products: ['iPhone X', 'iPhone 8', 'iPhone 7', 'iPhone 6s', 'iPhone SE', 'Accessories']},
  {name: 'Watch',
  id: 4,
  products: ['Apple Watch Series 1', 'Apple Watch Series 3', 'Apple Watch Nike+', 'Apple Watch Hermes', 'Apple Watch Edition', 'Bands', 'Accessories' ]},
  {name: 'TV',
  id: 5,
  products: ['Apple TV', 'Apple TV 4K',  'TV App']},
  {name: 'Music',
  id: 6,
  products: ['iPod touch', 'Apple Music', 'iTunes', 'HomePod' ]}
]







class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
      <SubNav />
        <header className="App-header">
          <h1 className="App-title">The Genius Bar</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
