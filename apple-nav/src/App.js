import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Home } from './components';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      macs: ['Macbook', 'Macbook Air', 'Macbook Pro', 'iMac', 'iMac Pro', 'Mac Pro', 'Mac Mini', 'Accessories', 'High Sierra', 'Compare'],
      ipads: ['iPad Pro', 'iPad', 'iPad mini 4', 'iOS 11', 'Accessories', 'Compare'],
      iphone: ['iPhone X', 'iPhone 8', 'iPhone 7', 'iPhone 6s', 'iPhone SE', 'iOS 11', 'Acessories', 'Compare'],
      watch: ['Apple Watch Series 3', 'Apple Watch Nike+', 'Apple Watch Edition', 'Apple Watch Series 1', 'WatchOS', 'Bands', 'Accessories', 'Compare'],
      tv: ['Apple TV 4K', 'Apple TV', 'TV App', 'Accessories', 'Compare'],
      music: ['Apple Music', 'iTunes', 'HomePod', 'iPod touch', 'Music Accessories', 'Gift Cards']
    }
  }
  render() {
    return (
      <div className="App">
        <Link to="/">Home</Link>
        <Route exact path="/" component={Home} />
      </div>
    );
  }
}

export default App;
