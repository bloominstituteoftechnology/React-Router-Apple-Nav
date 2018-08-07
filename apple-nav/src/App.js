import React, { Component } from 'react';
import {Link, NavLink, Route} from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import CanvasWall from './components/CanvasWall.js';
import Palette from './components/Palette.js';

const AppContainer = styled.div`
  width:900px;
  height:400px;
  background:#fff;
  margin: 4% auto;
  
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <CanvasWall />
        <Palette />
      </AppContainer>
    );
  }
}

export default App;
