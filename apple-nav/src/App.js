import React, { Component } from "react";
import "./App.css";
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

const AppDiv = styled.div`
display: flex;
justify-content: center;
`

const Ul = styled.ul`
display: flex;
flex-direction: row;
justify-content: space-evenly;
text-decoration: none;
`

class App extends Component {
  render() {
    return (
      <div>
        <Ul className="list">
          <li>
            <NavLink exact activeClassName="activeNavButton" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="activeNavButton" to="/Wac">
              Wac
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="activeNavButton" to="/iBad">
              iBad
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="activeNavButton" to="/iShmone">
              iShmone
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="activeNavButton" to="/Botch">
              Botch
            </NavLink>
          </li>
        </Ul>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Wac" component={Wac}/>
        <Route exact path="/iBad" component={iBad}/>
        <Route exact path="/iShmone" component={iShmone}/>
        <Route exact path="/Botch" component={Botch}/>
      </div>
    );
  }
}

function Home() {
  return(
    <AppDiv>
      <h1>This isn't snapple.com</h1>
    </AppDiv>
  )
}
function Wac() {
  return(
    <AppDiv>
      <ul>
        <li>
          <Link to="/Wac/iWac">
          iWac
          </Link>
        </li>
        <li>
          <Link to="/Wac/WacBook">
          WacBook
          </Link>
        </li>
        <li>
          <Link to="/Wac/WacMini">
          WacMini
          </Link>
        </li>
      </ul>
    </AppDiv>
  )
}
function iBad() {
  return(
    <AppDiv>
      <h1>just like the real thing</h1>
    </AppDiv>
  )
}
function iShmone() {
  return(
    <AppDiv>
      <h1>You say potato, I say potato</h1>
    </AppDiv>
  )
}
function Botch() {
  return(
    <AppDiv>
      <h1>I'm not writing any more copy</h1>
    </AppDiv>
  )
}
export default App;
