import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation.js'
import { Home, iPad, iWatch, iPhone, Mac, iPads, iWatches, iPhones, Macs } from './components/Components.js';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Apple">
          <Navigation className="Nav" />
          <Route exact path="/" component={Home}/>
          <Route path="/mac" component={Macs}/>
          <Route path="/ipad" component={iPads}/>
          <Route path="/iphone" component={iPhones}/>
          <Route path="/iwatch" component={iWatches}/>
          <h1 className="App-title">Welcome to Apple</h1>
        </header>
        <p className="MacProducts">
          <Route exact path="/mac/:name" component={Mac}/>
          <Route exact path="/ipad/:name" component={iPad}/>
          <Route exact path="/iphone/:name" component={iPhone}/>
          <Route exact path="/iwatch/:name" component={iWatch}/>
        </p>
      </div>
    );
  }
}

export default App;
