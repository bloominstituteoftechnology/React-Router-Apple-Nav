import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import { Route, NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import Subnav from "./Subnav.js";


const NavWrapper = styled.ul`
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
const NavArr = [
  {
    item: "Mac",
    icon1: "fas fa-laptop",
    icon2: "fas fa-laptop-code"
  },
  {
    item: "iPad",
    icon: "fas fa-tablet",
  },
{
    item: "iPhone",
    icon: "fas fa-mobile-alt",
    
  },
  {
    item: "Watch",
    icon: "fas fa-clock",
   
  },
  {
    item: "TV",
    icon: "fas fa-tv",
   
  },
  {
    item: "Music",
    icon1: "fas fa-music",
    icon2: "fas fa-headphones"
  }
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavWrapper>
          <li>
            <NavLink to="/">
              <i className="fab fa-apple" />
            </NavLink>
          </li>
          {NavArr.map(e => (
            <Nav data={e} key={e.item} />
          ))}
          <li>Support</li>
          <li>
            <i className="fas fa-search" />
          </li>
          <li>
            <i className="fas fa-shopping-bag" />
          </li>
        </NavWrapper>
        <Route
          path="/:item"
          render={props => <Subnav {...props} items={NavArr} />}
        />
      </div>
    );
  }
}
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
