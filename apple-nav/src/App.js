import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NavWrapper from './Navigation/NavWrapper';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <Route path="/" component={NavWrapper} />
      </>
    );
  }
}

export default App;
