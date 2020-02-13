import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import NavWrapper from './NavWrapper';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      tabs: ['ipad', 'iphone', 'mac', 'music', 'tv', 'watch'],
      ipad: ['./img/ipad/accesories.png', './img/ipad/compare.png', './img/ipad/ios.png', './img/ipad/ipad.png', './img/ipad/ipadmini4.png', './img/ipad/ipadpro.png'],
    }
  }
  render() {
    return (
      <div className="App">
        <Route path='/' render={(props)=> <NavWrapper {...props} tabs={this.state.tabs} ipad={this.state.ipad}/>} />
      </div>
    );
  }
}

