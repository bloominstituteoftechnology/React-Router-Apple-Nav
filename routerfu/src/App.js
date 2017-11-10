// import React, { Component } from 'react';
import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Navigation from './components/Navigation';
import { Home, Mac, Ipad, Iphone, Watch, Tv, Music, Support } from './components';
import { MacBook, MacBookAir, MacBookPro, Imac, ImacPro, MacPro, MacMini, Accessories, HighSierra, Compare } from './components/macIndex';

const App = () => (
  <div className="App">
    <Navigation />
    <Route exact = {true} path="/" component={Home} />
    <Route path="/mac" component={Mac} />
      {/* I only built out the submenu for the Mac product line. The rest is just repetition. */}
      <Route path="/macbook" component={MacBook} />
      <Route path="/macbook_air" component={MacBookAir} />
      <Route path="/macbook_pro" component={MacBookPro} />
      <Route path="/imac" component={Imac} />
      <Route path="/imac_pro" component={ImacPro} />
      <Route path="/mac_pro" component={MacPro} />
      <Route path="/mac_mini" component={MacMini} />
      <Route path="/accessories" component={Accessories} />
      <Route path="/high_sierra" component={HighSierra} />
      <Route path="/compare" component={Compare} />
    <Route path="/ipad" component={Ipad} />
    <Route path="/iphone" component={Iphone} />
    <Route path="/watch" component={Watch} />
    <Route path="/tv" component={Tv} />
    <Route path="/music" component={Music} />
    <Route path="/support" component={Support} />
  </div>
)

export default App;
