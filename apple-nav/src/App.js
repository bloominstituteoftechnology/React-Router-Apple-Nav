import React, { Component } from 'react';
import MainNav from './components/MainNav';
import styled from 'styled-components';

const Application = styled.div`

  max-width: 980px;
  width: 100%;
  margin: 0 auto;

`


class App extends Component {
  render() {
    return (
      <Application>
        <MainNav />
      </Application>
    );
  }
}

export default App;
