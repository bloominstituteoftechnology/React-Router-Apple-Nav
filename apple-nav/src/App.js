import React, { Component } from 'react';
import './App.css';
import NavHeader from './Components/NavHeader';
import {Route} from 'react-router-dom'; 
import SubNav from './Components/SubNav'; 
import Product from './Components/Product'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavHeader />
        <Route exact path = "/" component = {Home}/>
        <Route path = "/:name" component = {SubNav}/>
        <Route path = "/:name/:product" component = {Product} />
      </div>
    );
  }
}

const Home = () => {
  return(
    <div>
    <h1>Home Page</h1>
  </div>
  )
  
}

export default App;
