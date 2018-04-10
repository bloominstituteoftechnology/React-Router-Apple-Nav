import React, { Component } from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router,
  Route
  } from 'react-router-dom';
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
        <Navigation />
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
        <Route path='/ipad-pro' component={random}/>
        <Route path='/ipad' component={random}/>
        <Route path='/ipad-mini' component={random}/>
        <Route path='/ios' component={random}/>
        <Route path='/apple-watch-3' component={random}/>
        <Route path='/apple-watch-nike' component={random}/>
        <Route path='/apple-watch-hermes' component={random}/>
        <Route path='/apple-watch-edition' component={random}/>
        <Route path='/apple-watches' component={random}/>
        <Route path='/apple-music' component={random}/>
        <Route path='/itunes' component={random}/>
        <Route path='/homepod' component={random}/>
        <Route path='/ipod-touch' component={random}/>
        <Route path='/gift-cards' component={random}/>
        <Route path='/contact' component={random}/>
        <Route path='/support' component={random}/>
        <Route path='/apple-tv-4k' component={random}/>
        <Route path='/apple-tv' component={random}/>
        <Route path='/tv-app' component={random}/>
      </div>
    )
  }
}

export default App;
