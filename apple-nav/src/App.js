import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import TopNav from './components/TopNav';
import Home from './components/Home';
import Mac from './components/products/Mac';
import IPad from './components/products/iPad';
import IPhone from './components/products/iPhone';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <Route exact path="/" component={Home}/>
        <Route path="/mac" component={Mac}/>
        <Route path="/ipad" component={IPad}/>
        <Route path="/iphone" component={IPhone}/>
      </div>
    );
  }
}

export default App;
