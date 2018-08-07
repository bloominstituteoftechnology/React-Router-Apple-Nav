import React, { Component } from 'react';
import {Link, NavLink, Route} from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import CanvasWall from './components/CanvasWall.js';
import Palette from './components/Palette.js';
import CanvasData from './CanvasData.js';

const AppContainer = styled.div`
  width:900px;
  height:400px;
  ${'' /* background:#fff; */}
  margin: 4% auto;
  
`;

class App extends Component {
  constructor(props){
    super();
    this.state = {
      canvasData: CanvasData,
      activeId: null,
    }
  
  }

  getIdFromCanvas = () => {
    
  }

  render() {
    return (
      <AppContainer>
        <CanvasWall data={this.state.canvasData} getId={this.getIdFromCanvas}/>
        <Route exact path="/" render={props => <Palette {...props} />} />
        <Route path="/:id" render={props => <Palette {...props} />}/>
      </AppContainer>
    );
  }
}

export default App;
