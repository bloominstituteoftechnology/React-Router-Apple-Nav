import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import TopNav from './components/TopNav';
import Home from './components/Home';
import Mac from './components/products/Mac';
import IPad from './components/products/iPad';
import IPhone from './components/products/iPhone';
import Watch from './components/products/Watch';
import TV from './components/products/TV';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <Route exact path="/" component={Home}/>
        <Route path="/mac" component={Mac}/>
        <Route path="/ipad" component={IPad}/>
        <Route path="/iphone" component={IPhone}/>
        <Route path="/watch" component={Watch}/>
        <Route path="/tv" component={TV}/>
      </div>
    );
  }
}

export default App;
