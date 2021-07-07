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
        <Route path="/mac" component={ Mac } />
        <Route path="/ipad" component={ Ipad }/>
        <Route path="/iphone" component={ Iphone }/>
        <Route path="/watch" component={ Watch }/>
        <Route path="/tv" component={ Tv }/>
        <Route path="/music" component={ Music }/>
        <Route path="/support" component={ Support }/>
        <Route path='/mac/macbook' component={random}/>
        <Route path='/mac/macbook-air' component={random}/>
        <Route path='/mac/imac' component={random}/>
        <Route path='/mac/imac-pro' component={random}/>
        <Route path='/mac/mac-pro' component={random}/>
        <Route path='/mac/mac-mini' component={random}/>
        <Route path='/mac/accessories' component={random}/>
        <Route path='/mac/high-sierra' component={random}/>
        <Route path='/compare' component={random}/>
        <Route path='/ipad/ipad-pro' component={random}/>
        <Route path='/ipad/ipad' component={random}/>
        <Route path='/ipad/ipad-mini' component={random}/>
        <Route path='/ipad/ios' component={random}/>
        <Route path='/watch/apple-watch-3' component={random}/>
        <Route path='/watch/apple-watch-nike' component={random}/>
        <Route path='/watch/apple-watch-hermes' component={random}/>
        <Route path='/watch/apple-watch-edition' component={random}/>
        <Route path='/watch/apple-watches' component={random}/>
        <Route path='/music/apple-music' component={random}/>
        <Route path='/music/itunes' component={random}/>
        <Route path='/music/homepod' component={random}/>
        <Route path='/music/ipod-touch' component={random}/>
        <Route path='/music/gift-cards' component={random}/>
        <Route path='/support/contact' component={random}/>
        <Route path='/support/support' component={random}/>
        <Route path='/tv/apple-tv-4k' component={random}/>
        <Route path='/tv/apple-tv' component={random}/>
        <Route path='/tv/tv-app' component={random}/>
      </div>
    )
  }
}

export default App;
