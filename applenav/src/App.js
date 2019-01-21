import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavWrapper from './components/NavWrapper';
import styled from 'styled-components';
import Iphone from './components/Iphone';

const StyledNavWrapper = styled(NavWrapper)`

  margin: 0 auto;
  max-width: 980px;
  padding: 0 22px;
  position: relative;
  z-index: 2;
`;

const NavBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 9999;
  display: block;
  margin: 0;
  width: 100%;
  min-width: 1024px;
  height: 48px;
  max-height: 44px;
  background-color: #0a0a0a;

  font-size: 17px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const StyledApp = styled.div`
  background-color: #000;
  height: 1000px;
`;

class App extends Component {
  render() {
    return (
      <StyledApp>
        <NavBackground><StyledNavWrapper/></NavBackground>
        <Route exact path="/" />
        <Route path="/mac"/>
        <Route path="/ipad"/>
        <Route path="/iphone" component={Iphone}/>
        <Route path="/watch"/>
        <Route path="/tv"/>
        <Route path="/music"/>
        <Route path="/support"/>
        <Route path="/search"/>
        <Route path="/bag"/>
      </StyledApp>
    );
  }
}

export default App;
