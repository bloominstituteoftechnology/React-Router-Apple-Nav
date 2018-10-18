import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={Nav}></Route>
      </div>
    );
  }
}

export default App;
