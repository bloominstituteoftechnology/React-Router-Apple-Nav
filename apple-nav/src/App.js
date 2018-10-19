import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import './App.css';
import Nav from './components/Nav';
import { navData } from './AppData';

const AppContainer = styled.div`
  background-color: black;
  height: 100vh;
`;

class App extends Component {
  constructor(){
    super();
    this.state = {
      navData: navData
    }
  }
  render() {
    return (
      <AppContainer>
        <Route path="/" render={(props)=><Nav {...props} navData={this.state.navData}/>}/>
        {/*Add page specific Routes here...*/}
      </AppContainer>
    );
  }
}

export default App;
