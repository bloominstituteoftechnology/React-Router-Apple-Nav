import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SubNav from './Components/SubNav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
              <div className="app-container">
          <Route exact path="/:product" component={SubNav} />
        </div>
      </div>
    );
  }
}

export default App;
