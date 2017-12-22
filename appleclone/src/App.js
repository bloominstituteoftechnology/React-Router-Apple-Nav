import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { Home, Nav, Mac, iPad, Watch, TV, Music } from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="subpage">
          <Route exact={true} path="/" component={Home}/>
          <Route path="/Mac" component={Mac} />
          <Route path="/iPad" component={iPad} />
          <Route path="/Watch" component={Watch} />
          <Route path="/TV" component={TV} />
          <Route path="/Music" component={Music} />
        </div>
      </div>
    );
  }
}

export default App;
