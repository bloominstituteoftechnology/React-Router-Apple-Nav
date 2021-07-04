import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import MainNavContainer from './Components/MainNav/MainNavContainer'

const AppContainer = styled.div`
  font-size: 62.5%;
  `;

class App extends Component {
  render() {
    return (
      <AppContainer className="App">
        <Route path="/" render={() => <MainNavContainer />} />
      </AppContainer>
    );
  }
}

export default App;
