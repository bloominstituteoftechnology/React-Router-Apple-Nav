import React, { Component } from 'react';

import NavBar from './components/NavBar';

import navData from './navData';

class App extends Component {

  constructor() {

    super();

    this.state = {

      navData: navData

    }

  }

  render() {
    return (
      <div className="App">
        <NavBar data={this.state.navData} />
      </div>
    );
  }
}

export default App;
