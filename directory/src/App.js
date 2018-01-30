import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <h1>RickyMickey>
        <ul>
          <li><Link className="link" to="/" exact>back</Link></li>
          <li><Link className="link" to="/about" exact>About</Link></li>
          <li><Link className="link" to="/Mickey" exact>Mickey</Link></li>
          <li><Link className="link" to="/Ricky" exact>Ricky</Link></li>
       </ul>
         <Route path="/about" component={About} />
         <Route path="/Mickey" component={Mickey} />
         <Route path="/Ricky" component={Ricky} />
         </div>
       </BrowserRouter>
);
}
}
const About = () => {
   return (
    <div>
     <ul className="Nav">
      <li><Link className="link" to="/about/vampirina">Vampirina</Link></li>
      <li><Link className="link" to="/about/babydie">BabyDie</Link></li>
      <li><Link className="link" to="/about/whenbrainstop">whenbrainstop</Link></li>
      </ul>
     
       <Route path="/about/vampirina" component={Vampirina} />
       <Route path="/about/BabyDie" component={BabyDie} />
       <Route path="/about/whenbrainstop" component={whenbrainstop} />
      </div>
   )
  }
  
const Vampirina = () => {
  return (
    <ul className="Nav">
       <li>magiccastle</li>
       <li>colorpurple</li>
       <li>magicspells</li>
     </ul>
    )
  }
  
const BabyDie = () => {
   return (
  <ul className="Nav">
     <li>hesick</li>
      <li>theysayhenotmine</li>
      <li>nohewontleaveme</li>
    </ul>
    )
  }
  const whenbrainstop = () => {
    return (
      <h1>heartbroke</h1>
    )
  }
  const Ricky = () => {
    return (
      <h1>Ricky</h1>
    )
  }
  const Mickey = () => {
    return (
      <h1>Mickey</h1>
    )
  }
  export default App;
 

 
        