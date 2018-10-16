import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';

import './App.css';

import TopNav from './components/TopNav';
import Home from './components/Home';
import Mac from './components/products/Mac';
import IPad from './components/products/iPad';
import IPhone from './components/products/iPhone';
import Watch from './components/products/Watch';
import TV from './components/products/TV';
import Music from './components/products/Music';

const RoutesContainer = posed.div({
  enter: {x: 0},
  exit: {x: 200}
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <PoseGroup>
          <RoutesContainer key={Date.now()}>
            <Switch location={window.location}>
              <Route exact path="/" component={Home}/>
              <Route path="/mac" component={Mac}/>
              <Route path="/ipad" component={IPad}/>
              <Route path="/iphone" component={IPhone}/>
              <Route path="/watch" component={Watch}/>
              <Route path="/tv" component={TV}/>
              <Route path="/music" component={Music}/>
            </Switch>
          </RoutesContainer>
        </PoseGroup>
      </div>
    );
  }
}

export default App;
