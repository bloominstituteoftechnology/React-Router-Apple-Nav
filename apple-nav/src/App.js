import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';


import './App.css';

const MainNav = () => <h1>Main Nav</h1>

const SubNav = () => <h1>Sub Nav</h1>


class App extends Component {
  render() {
    return (
      <div className="App">
      <MainNav />
      <Switch>
        <Route
          path="/:mainID/:subID"
          render={(props) => <SubNav {...props} /> }
        />
      </Switch>
      </div>
    );
  }
}

export default App;
