import React, { Component } from 'react';
import logo from './logo.svg';
import {Route, NavLink} from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import Nav from './Nav.js';
import Subnav from './Subnav.js';
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
  {item: 'Mac',
  icon1:'fas fa-laptop',
  icon2:'fas fa-laptop-code'
  },
  {item:'iPad',
  icon1:'fas fa-tablet',
  icon2: 'fas fa-tablet-alt'
},
 {item:'iPhone',
 icon1:'fas fa-mobile-alt',
 icon2:'fas fa-mobile'
},
  {item:'Watch',
  icon1: 'fas fa-clock',
  icon2: 'far fa-clock'
},
  {item:'TV',
  icon1:'fas fa-tv',
  icon2: 'fas fa-video'
},
  {item: 'Music',
  icon1:'fas fa-music',
  icon2:'fas fa-headphones'
}
]
class App extends Component {
  render() {
    return (
      <div className="App">
       <NavWrapper>
         <li>
           <NavLink to="/"><i className="fab fa-apple"></i></NavLink>
         </li>
         {NavArr.map(e=><Nav data={e} key={e.item}/>)}
         <li>
           Support
         </li>
         <li>
           <i className="fas fa-search"></i>
         </li>
         <li>
           <i className="fas fa-shopping-bag"></i>
         </li>
       </NavWrapper>
       <Route path='/:item'
       render={props=>(<Subnav {...props} items={NavArr}></Subnav>)}></Route>
      </div>
    );
  }
}

export default App;
