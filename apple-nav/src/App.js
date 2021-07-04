import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import dummyData from './dummy-data';
import NavWrapper from './components/NavWrapper';
import SubNav from './components/SubNav';
import DummyPage from './components/DummyPage';

class App extends Component {
  constructor(){
    super();
    this.state = {
      navigation: dummyData,
    }
  }

  render() {
    return (
      <div className="app-container">
        <NavWrapper navigation={this.state.navigation} />
        <Route exact path="/" render={props=> <DummyPage {...props} content="This is the dummy page for home" />} />
        <Route exact path="/:nav" render={ props => <SubNav {...props} navs={this.state.navigation} />} />
        <Route path="/:nav/:subnav" component={DummyPage} />
      </div>
    );
  }
}

export default App;

// <Route to="/:nav/:subnav" component={} />
