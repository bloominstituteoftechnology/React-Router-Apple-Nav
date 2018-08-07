import React, { Component } from 'react';
import './App.css';
import NavContainer from './Components/NavContainer';
import { Route } from 'react-router-dom';
import SubNav from './Components/SubNav';
import Home from './Components/Home';
import Product from './Components/Product';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { AnimatedSwitch } from 'react-router-transition';

library.add(fas, fab);

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavContainer />
        <div className="app-container">
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <Route exact path="/" component={Home} />
            <Route path="/:productClass" component={SubNav} />
            <Route path="/:productClass/:product" component={Product} />
          </AnimatedSwitch>
        </div>
      </div>
    );
  }
}

export default App;
