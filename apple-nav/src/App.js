import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import MainNav from './Components/MainNav';

const PageNotFound = () => <h1>Sorry Page Not Found</h1>

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" render={(props) => <MainNav {...props} /> } />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  };
};

export default App;