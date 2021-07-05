import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Route } from 'react-router-dom';
import Mac from './components/NavOptions/Mac';
import IPad from './components/NavOptions/IPad';
import IPhone from './components/NavOptions/IPhone';
import Watch from './components/NavOptions/Watch';
import TV from './components/NavOptions/TV';
import Music from './components/NavOptions/Music';
import Support from './components/NavOptions/Support';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route exact path="/mac" component={Mac} />
        <Route exact path="/ipad" component={IPad} />
        <Route exact path="/iphone" component={IPhone} />
        <Route exact path="/watch" component={Watch} />
        <Route exact path="/tv" component={TV} />
        <Route exact path="/music" component={Music} />
        <Route exact path="/support" component={Support} />
      </div>
    );
  }
}

export default App;
