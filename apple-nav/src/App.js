import React, { Component } from 'react';
import './App.css';
import TopBar from './components/Top-bar.js';
import { Route } from 'react-router-dom';
import Home from './components/Home.js';
import ApplePie from './components/ApplePie.js';
import Store from './components/store.js';
import Phone from './components/phone.js';
import EyePad from './components/EyePad.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <TopBar />
	  <Route exact path="/" component={Home} />
	  <Route path="/McDonalds/" component={ApplePie} />
	  <Route path="/store/" component={Store} />
	  <Route path="/phone/" component={Phone} />
	  <Route path="/iPad/" component={EyePad} />
      </div>
    );
  }
}

export default App;
