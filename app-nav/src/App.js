import React, { Component } from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';
import NavWrapper from './Components/NavWrapper';
import Route from 'react-router-dom/Route';
import SubNav from './Components/SubNav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: ['home','Mac','iPad','iPhone','Watch','TV','Music','Support'],
      products: {
        'Mac':['MacBook','MacBook Air','MacBook Pro','iMac','iMac Pro','Mac Pro','Mac mini'],
        'iPad':['iPad Pro','iPad','iPad mini 4'],
        'iPhone':['iPhone X','iPhone 8','iPhone 7','iPhone 6s','iPhone SE'],
        'Watch':['Apple Watch Series 3', 'Apple Watch Nike+', 'Apple Watch Hermes','Apple Watch Edition','Apple Watch Series 1'],
        'TV':['Apple TV 4K', 'Apple TV'],
        'Music':['Apple Music','iTunes','HomePod','iPod touch'],
        'Support':['Support','Communities','Contact']
      },
      
    }
  }


  render() {
    return (
      <div className="App">
        <NavWrapper navItems={this.state.navItems} />
        <Route path="/:salamander" render={props => <SubNav {...props} subItems={this.state.products} /> } />
      </div>
    );
  }
}

export default App;
