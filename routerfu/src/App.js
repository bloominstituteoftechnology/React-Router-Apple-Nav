// import React, { Component } from 'react';
import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Navigation from './components/Navigation';
import { Home, Mac, Ipad, Iphone, Watch, Tv, Music, Support } from './components';

const App = () => (
  <div className="App">
    <Navigation />
    <Route exact = {true} path="/" component={Home} />
    <Route path="/mac" component={Mac} />
    <Route path="/ipad" component={Ipad} />
    <Route path="/iphone" component={Iphone} />
    <Route path="/watch" component={Watch} />
    <Route path="/tv" component={Tv} />
    <Route path="/music" component={Music} />
    <Route path="/support" component={Support} />
  </div>
)

export default App;
