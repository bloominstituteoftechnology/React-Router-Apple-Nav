import React, { Component } from 'react';
import posed, { PoseGroup } from "react-pose";
import { Route } from 'react-router-dom';

import Nav from './components/Nav';
import SubNav from './components/SubNav';

import './App.css';

//create a posed component with our two visual states, enter and exit.
const RoutesContainer = posed.div({
  enter: {  },
  exit: { }
});

const App = () => (
  <Route
    render={({ location }) => (
      <div className="App">
        <PoseGroup>
          <RoutesContainer key={location.key}>
            <Route path="/" component={Nav} />
            <Route path="/:category" component={SubNav} />
          </RoutesContainer>
        </PoseGroup>
      </div>
    )}
  />
);

export default App;
