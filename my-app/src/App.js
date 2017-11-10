import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to NFL</h1>
//         </header>
//         <p className="App-intro">
//           National Football League
//         </p>
//       </div>
//     );
//   }
// }

const Home = () => (
  <div>
    <h1 className="App-Title">Welcome to NFL</h1>
    <p className="App-intro">National Football League</p>
  </div>
)

const Division = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Divisions = ({ match }) => (
  <div>
    <h2>Divisions</h2>
    <ul>
      <li>
        <Link to={`${match.url}/AFCEast`}>
          AFC East
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/AFCNorth`}>
          AFC North
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Division}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)



const TheLeague = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/" activeClassName="active">Home</Link></li>
        <li><Link to="/divisions">Divisions</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/divisions" component={Divisions}/>
    </div>
  </Router>
)

export default TheLeague;
