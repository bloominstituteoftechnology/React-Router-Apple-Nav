import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Ipad from './Ipad';
import Iphone from './Iphone';
import Mac from './Mac';
import Music from './Music';
import Tv from './Tv';
import Watch from './Watch';
import Support from './Support';
import Navigation from './Navigation';
import random from './rando';
class App extends Component {
  render() {
    return (
      <div>
    <Route exact path="/" component={ Navigation } />
    <Route path ="/mac" component={ Mac } />
    <Route path="/ipad" component={ Ipad }/>
    <Route path="/iphone" component={ Iphone }/>
    <Route path="/watch" component={ Watch }/>
    <Route path="/tv" component={ Tv }/>
    <Route path="/music" component={ Music }/>
    <Route path="/support" component={ Support }/>
    <Route path='/macbook' component={random}/>
    <Route path='/macbook-air' component={random}/>
    <Route path='/imac' component={random}/>
    <Route path='/imac-pro' component={random}/>
    <Route path='/mac-pro' component={random}/>
    <Route path='/mac-mini' component={random}/>
    <Route path='/accessroies' component={random}/>
    <Route path='/high-sierra' component={random}/>
    <Route path='/compare' component={random}/>
    </div>
    )
  }
}

export default App;
