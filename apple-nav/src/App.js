import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import TopMenu from './TopMenu.js';
import dummyData from './dummy-data';


class App extends Component {

  constructor() {
    super();
    this.state = {
      menuData: []
    };
  }

  componentDidMount() {
    this.setState({menuData: dummyData});
  }

  render() {
    return (
      <div className="App">
        <Route path="/" render={() => (
          <TopMenu menuData={this.state.menuData} />
        )} />
      </div>
    );
  }
}

export default App;
