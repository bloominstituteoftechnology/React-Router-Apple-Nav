import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Navigation from './navigation';
import Mac from './mac';
import IPad from './ipad';
import Home from './home';
import MacBook from './macbook';
import IMac from './imac';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation />
        <Route path="/" component={Home} exact />
        <Route path="/mac" component={Mac} exact/>
        <Route path="/ipad" component={IPad} />
        <Route path="/mac/macbook" component={MacBook} />
        <Route path="/mac/imac" component={IMac} />
      </div>
    );
  }
}

export default App;
