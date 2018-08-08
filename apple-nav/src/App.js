import React, { Component } from 'react';
import Home from './Home';
import iPadMain from './components/iPad/iPadMain';
import iPhoneMain from './components/iPhone/iPhoneMain';
import MacMain from './components/mac/MacMain';
import MusicMain from './components/music/MusicMain';
import TvMain from './components/tv/TvMain';
import WatchMain from './components/watch/WatchMain';
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
        <Route path="/mac" component={MacMain}/>
        <Route path="/ipad" component={iPadMain}/>
        <Route path="/iphone" component={iPhoneMain}/>
        <Route path="/watch" component={WatchMain}/>
        <Route path="/tv" component={TvMain}/>
        <Route path="/Music" component={MusicMain}/>
      </div>
    );
  }
}

export default App;