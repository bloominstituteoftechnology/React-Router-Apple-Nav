import React, { Component } from 'react';
import logo from './logo.svg';
import {NavLink} from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import Nav from './Nav.js';

const NavWrapper=styled.ul`
  max-width: 800px;
  width: 100%;
  height: 100px;
  margin: 0 auto;
  background-color: black;
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  list-style-type: none;
`;
const NavArr=[
  'Mac',
  'iPad',
  'iPhone',
  'Watch',
  'TV',
  'Music', 
  'Support'
  
]
class App extends Component {
  render() {
    return (
      <div className="App">
       <NavWrapper>
         <li>
           <NavLink exact activeClassName='activeNavLink' to="/"><i className="fab fa-apple"></i></NavLink>
         </li>
         {NavArr.map(e=><Nav data={e}/>)}
         <li>
           <i class="fas fa-search"></i>
         </li>
         <li>
           <i class="fas fa-shopping-bag"></i>
         </li>
       </NavWrapper>
      </div>
    );
  }
}

export default App;
