import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>Hello World</h1>
          <ul>
            <li> <Link className="link" to="/" exact>back</Link></li>
            <li><Link className="link" to="/about" exact>About</Link></li>
            <li><Link className="link" to="/christmas" exact>Christmas</Link></li>
            <li><Link className="link" to="/happy" exact>Happy</Link></li>
          </ul>
        <Route path="/about" component={About} />
        <Route path="/christmas" component={Christmas} />
        <Route path="/happy" component={Happy} />
        </div>
      </BrowserRouter>
    );
  }
}
const About = () => {
  return (
    <div>
    <ul className="Nav">
      <li> <Link className="link" to="/about/cat">Cat</Link></li>
      <li><Link className="link" to="/about/baby">Baby</Link></li>
      <li><Link className="link" to="/about/skateboarding">Skateboarding</Link></li>
      </ul>
      
      <Route path="/about/cat" component={Cat} />
      <Route path="/about/baby" component={Baby} />
      <Route path="/about/skateboarding" component={Skate} />
      </div>
  )
}

const Christmas = () => {
  return (
    <ul className="Nav">
      <li>Wish list</li>
      <li>Vacation</li>
      <li>Family</li>
    </ul>
  )
}

const Happy = () => {
  return (
  <ul className="Nav">
    <li>Stuff</li>
    <li>Cool</li>
    <li>Lazers</li>
  </ul>
  )
}
const Cat = () => {
  return (
    <h1>CAT!!!!!!!!!!!!</h1>
  )
}
const Baby = () => {
  return (
    <h1>Baby</h1>
  )
}
const Skate = () => {
  return (
    <h1>Skateboarding</h1>
  )
}
export default App;
