import React, { Component } from 'react';
import './App.css';
import NavHeader from './Components/NavHeader';
import {Route} from 'react-router-dom'; 
import SubNav from './Components/SubNav'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavHeader />
        <Route exact path = "/" component = {Home}/>
        <Route path = "/:name" component = {SubNav}  />
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
