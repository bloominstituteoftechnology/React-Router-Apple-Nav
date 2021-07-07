import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Mac from './components/Nav/Mac';
import Ipad from './components/Nav/Ipad';
import Iphone from './components/Nav/Iphone';
import Watch from './components/Nav/Watch';
import TV from './components/Nav/TV';
import Music from './components/Nav/Music';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={Nav}></Route>
        <Route path='/mac' component={Mac}></Route>
        <Route path='/ipad' component={Ipad}></Route>
        <Route path='/iphone' component={Iphone}></Route>
        <Route path='/watch' component={Watch}></Route>
        <Route path='/tv' component={TV}></Route>
        <Route path='/music' component={Music}></Route>
      </div>
    );
  }
}

export default App;
