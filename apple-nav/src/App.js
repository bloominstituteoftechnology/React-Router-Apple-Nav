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
  margin: 4% auto;
  
`;

class App extends Component {
  constructor(){
    super();
    this.state = {
      canvasData: CanvasData,
      activeCanvas: null,
    }
  }

  componentDidMount(){
    let active = CanvasData[0];
    this.setState({
      activeCanvas: active,
    });
  }

 getIdFromCanvas = (id) => {
   console.log("active id", id);
   let nuId = id;
   this.setState({
     activeCanvas: nuId,
   });
 }

 addPanelToCanvas = () => {
   console.log("adding panel");
   
 }

  render() {
    console.log("State from App", this.state);
    
    return (
      <AppContainer>
        <CanvasWall data={this.state.canvasData} activeCanvas={this.state.activeCanvas} getId={this.getIdFromCanvas}/>
        <Route exact path="/" render={props => <Palette {...props} addPanel={this.addPanelToCanvas}/>} />
        <Route path="/:id" render={props => <Palette {...props} addPanel={this.addPanelToCanvas}/>}/>
      </AppContainer>
    );
  }
}

export default App;
