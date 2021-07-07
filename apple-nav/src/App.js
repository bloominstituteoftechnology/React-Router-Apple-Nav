import React, { Component } from 'react';
import './App.css';
import {Route, Link, NavLink} from 'react-router-dom'; 
import Nav from './Nav'; 
import SubNav from './SubNav'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: ['Mac','iPad','iPhone','Watch','TV','Music','Support'],
      products: {
        Mac:['MacBook','MacBook Air','MacBook Pro','iMac','iMac Pro','Mac Pro','Mac mini'],
        iPad:['iPad Pro','iPad','iPad mini 4'],
        iPhone:['iPhone X','iPhone 8','iPhone 7','iPhone 6s','iPhone SE'],
        Watch:['Apple Watch Series 3', 'Apple Watch Nike+', 'Apple Watch Hermes','Apple Watch Edition','Apple Watch Series 1'],
        TV:['Apple TV 4K', 'Apple TV'],
        Music:['Apple Music','iTunes','HomePod','iPod touch'],
        Support:['Support','Communities','Contact']
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
        <Nav  
          changePage={this.changePage} 
          items={this.state.navItems}
          />
      <div>
        <Route 
          exact  
          path="/:id/" 
          render={(props)=> <SubNav {...props} items={this.state.products}/>}
          />
      </div>
      </div>
    );
  }
}
 export default App;