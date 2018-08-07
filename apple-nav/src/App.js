import React, { Component } from 'react';
import {NavLink, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import dummyData from './data';

class App extends Component {
  constructor(){
    super();
    this.state= {
      navData: dummyData
    }
  }

  render() {
    return (
      <div className="app">
        <div className="navbar">
            <NavLink className="navlink" exact to="/home"><i class="fab fa-apple"></i></NavLink>
            <NavLink className="navlink" to="/mac">Mac</NavLink>
            <NavLink className="navlink" to="/ipad">iPad</NavLink>
            <NavLink className="navlink" to="/iphone">iPhone</NavLink>
            <NavLink className="navlink" to="/watch">Watch</NavLink>
            <NavLink className="navlink" to="/tv">TV</NavLink>
            <NavLink className="navlink" to="/music">Music</NavLink>
            <NavLink className="navlink" to="/support">Support</NavLink>
            <NavLink className="navlink" to="/search"><i class="fas fa-search"></i></NavLink>
            <NavLink className="navlink" to="/cart"><i class="fas fa-shopping-bag"></i></NavLink>
       </div>
          <Route path="/home" Component={Home}/>
      </div>
    );
  }
}

export default App;
