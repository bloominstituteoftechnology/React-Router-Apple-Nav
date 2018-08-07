import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';
import SubNavBar from './components/SubNavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: ['Mac','iPad','iPhone','Watch','TV','Music','Support'],
      products: {
        'Mac':['MacBook','MacBook Air','MacBook Pro','iMac','iMac Pro','Mac Pro','Mac mini'],
        'iPad':['iPad Pro','iPad','iPad mini 4'],
        'iPhone':['iPhone X','iPhone 8','iPhone 7','iPhone 6s','iPhone SE'],
        'Watch':['Apple Watch Series 3', 'Apple Watch Nike+', 'Apple Watch Hermes','Apple Watch Edition','Apple Watch Series 1'],
        'TV':['Apple TV 4K', 'Apple TV'],
        'Music':['Apple Music','iTunes','HomePod','iPod touch'],
        'Support':['Support','Communities','Contact']
      },
      currentPage:''
    }
  }
  changePage = (id) =>{
    this.setState({
      currentPage: id
    })
  }
  componentDidMount() {
    
  }
  
  
  render() {
    return (
      <div className="App">
      <Navbar changePage={this.changePage} items={this.state.navItems}/>
      <Route exact  path="/:id" render={(props)=> <SubNavBar {...props} items={this.state.products}/>} />
      <Route exact  path="/:id/:product" render={(props)=> <SubNavBar {...props} items={this.state.products}/>} />

      </div>
    );
  }
}

export default App;
