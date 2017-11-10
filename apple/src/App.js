import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import {
  MainNav,
  Home,
  Mac,
  /*
  Ipad,
  Iphone,
  Watch,
  Tv,
  Music,
  Support,
  */
} from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MainNav />
        </header>

        <Route exact path="/" component={Home}/>
        <Route path="/mac" component={Mac}/>
        {/*
          <Route path="/ipad" component={Ipad}/>
          <Route path="/iphone" component={Iphone}/>
          <Route path="/watch" component={Watch}/>
          <Route path="/tv" component={Tv}/>
          <Route path="/music" component={Music}/>
          <Route path="/support" component={Support}/>
        */}

      </div>
    );
  }
}

export default App;
