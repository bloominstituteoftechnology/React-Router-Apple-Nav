import React, { Component } from 'react';
import Home from './Home';
import iPad from './components/iPad/iPad';
import iPhone from './components/iPhone/iPhone';
import Mac from './components/mac/Mac';
import Music from './components/music/Music';
import Tv from './components/tv/Tv';
import Watch from './components/watch/Watch';
import './App.css';
import {Route, NavLink} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to="/"><img src="#" alt="logo"/></NavLink>
          <NavLink activeClassName="selected" to="/mac">Mac</NavLink>
          <NavLink activeClassName="selected" to="/ipad">iPad</NavLink>
          <NavLink activeClassName="selected" to="/iphone">iPhone</NavLink>
          <NavLink activeClassName="selected" to="/watch">Watch</NavLink>
          <NavLink activeClassName="selected" to="/tv">TV</NavLink>
          <NavLink activeClassName="selected" to="/music">Music</NavLink>
        </nav>
        <Route exact path="/" component={Home}/>
        <Route path="/mac" component={Mac}/>
        <Route path="/ipad" component={iPad}/>
        <Route path="/iphone" component={iPhone}/>
        <Route path="/watch" component={Watch}/>
        <Route path="/tv" component={Tv}/>
        <Route path="/Music" component={Music}/>
      </div>
    );
  }
}

export default App;