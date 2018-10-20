import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavWrapper from './component/NavWrapper/NavWrapper';
import Nav from './component/Nav/Nav';
import SubNav from './component/SubNav/SubNav';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavWrapper>
         
          <Nav>
            <SubNav></SubNav>
          </Nav>
        </NavWrapper>
         
      
      </div>
    );
  }
}

export default App;
