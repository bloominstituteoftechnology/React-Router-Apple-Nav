import React, { Component } from 'react';
import './App.css';
import {Route, Link, Switch} from 'react-router-dom';

import NavWrapper from './components/navwrapper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={NavWrapper} />
        </Switch>
      </div>
    );
  }
}

export default App;
