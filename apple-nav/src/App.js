import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';

import NavWrapper from './components/navwrapper';
import SubNav from './components/subnav';

class App extends Component {
  constructor() {
    super();
    this.navLinks = [
      {
        'Mac':
          [
            'MacBook',
            'MacBook Air',
            'MacBook Pro',
            'iMac',
            'iMac Pro',
            'Mac Pro',
            'Mac mini',
            'Accessories',
            'High Sierra',
            'Compare'
          ]
      },
      {
        'iPad':
          [
            'iPad Pro',
            'iPad',
            'iPad mini 4',
            'iOS 11',
            'Accessories',
            'Compare'
          ]
      },
      {
        'iPhone':
          [
            'iPhone X',
            'iPhone 8',
            'iPhone 7',
            'iPhone 6s',
            'iPhone SE',
            'iOS 11',
            'Accessories',
            'Compare'
          ]
      },
      {
        'Watch':
          [
            'Apple Watch Series 3',
            'Apple Watch Nike+',
            'Apple Watch Hermes',
            'Apple Watch Edition',
            'Apple Watch Series 1',
            'watchOS',
            'Bands',
            'Accessories',
            'Compare'
          ]
      },
      {
        'TV':
          [
            'Apple TV 4K',
            'Apple TV',
            'TV App',
            'Accessories',
            'Compare'
          ]
      },
      {
        'Music':
          [
            'Apple Music',
            'iTunes',
            'HomePod',
            'Music Accessories',
            'Gift Cards'
          ]
      }
    ];
  }

  render() {
    return (
      <div className="App">
        <Route path='/' render={(props) => <NavWrapper {...props} navLinks={this.navLinks} />} />
        <Route exact path='/:category' render={props=> <SubNav {...props} navLinks={this.navLinks}/>}/>
      </div>
    );
  }
}

export default App;
