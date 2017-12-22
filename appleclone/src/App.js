import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { Home, Nav, subNav1, subNav2, subNav3, subNav4, subNav5 } from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="subpage">
          <Route exact={true} path="/" component={Home}/>
          <Route path="/subNav1" component={subNav1} />
          <Route path="/subNav2" component={subNav2} />
          <Route path="/subNav3" component={subNav3} />
          <Route path="/subNav4" component={subNav4} />
          <Route path="/subNav5" component={subNav5} />
        </div>
      </div>
    );
  }
}

export default App;
