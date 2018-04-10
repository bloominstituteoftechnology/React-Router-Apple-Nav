import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import dummyData from './dummyData';

import MainNav from './Components/MainNav';
import SubNav from './Components/SubNav';
import './App.css';


const FourohFour = () => <h1>Sorry Invalid Page :(</h1>


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Route exact path="/" component={MainNav} /> */}
        <Switch>
          <Route
            path="/"
            render={(props) => <MainNav {...props} />}
          />
          <Route component={FourohFour} />
        </Switch>
      </div>
    );
  }
}

export default App;
