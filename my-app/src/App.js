import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
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


const AFCEastTeam = ({ match }) => (
  <div>
    <h3>{match.params.teamId}</h3>
  </div>
)

const AFCEastTeams = ({ match }) => (
  <div>
  <ul>
    <li>
      <Link to={`${match.url}/bills`}>
        Buffalo Bills
      </Link>
      <img src="bills.jpg"/> 
    </li>
    <li>
      <Link to={`${match.url}/dolphins`}>
        Miami Dolphins
      </Link>
    </li>
    <li>
      <Link to={`${match.url}/patriots`}>
        New England Patriots
      </Link>
    </li>
    <li>
      <Link to={`${match.url}/jets`}>
        New York Jets
      </Link>
    </li>
  </ul>
  </div>
)

const AFCNorthTeam = ({ match }) => (
  <div>
    <h3>{match.params.teamId}</h3>
  </div>
)

const AFCNorthTeams = ({ match }) => (
  <div>
  <ul>
    <li>
      <Link to={`${match.url}/ravens`}>
        Baltimore Ravens
      </Link>
    </li>
    <li>
      <Link to={`${match.url}/bengals`}>
        Cincinnati Bengals
      </Link>
    </li>
    <li>
      <Link to={`${match.url}/browns`}>
        Cleveland Browns
      </Link>
    </li>
    <li>
      <Link to={`${match.url}/steelers`}>
        Pittsburgh Steelers
      </Link>
    </li>
  </ul>
  </div>
)

const AFCSouthTeam = ({ match }) => (
  <div>
    <h3>{match.params.teamId}</h3>
  </div>
)

const AFCSouthTeams = ({ match }) => (
  <div>
  <ul>
    <li>
      <Link to={`${match.url}/texans`}>
        Houston Texans
      </Link>
    </li>
    <li>
      <Link to={`${match.url}/colts`}>
        Indianapolis Colts
      </Link>
    </li>
    <li>
      <Link to={`${match.url}/jaguars`}>
        Jacksonville Jaguars
      </Link>
    </li>
    <li>
      <Link to={`${match.url}/titans`}>
        Tennessee Titans
      </Link>
    </li>
  </ul>
  </div>
)

const AFCWestTeam = ({ match }) => (
  <div>
    <h3>{match.params.teamId}</h3>
  </div>
)

const AFCWestTeams = ({ match }) => (
  <div>
  <ul>
    <li>
      <Link to={`${match.url}/broncos`}>
        Denver Broncos
      </Link>
    </li>
    <li>
      <Link to={`${match.url}/chiefs`}>
        Kansas City Chiefs
      </Link>
    </li>
    <li>
      <Link to={`${match.url}/chargers`}>
        Los Angeles Chargers
      </Link>
    </li>
    <li>
      <Link to={`${match.url}/raiders`}>
        Oakland Raiders
      </Link>
    </li>
  </ul>
  </div>
)

const NFCEastTeam = ({ match }) => (
  <div>
    <h3>{match.params.teamId}</h3>
  </div>
)

const NFCEastTeams = ({ match }) => (
  <div>
  <ul>
    <li>
      <Link to={`${match.url}/cowboys`}>
        Dallas Cowboys
      </Link>
    </li>
    <li>
      <Link to={`${match.url}/giants`}>
        New York Giants
      </Link>
    </li>
    <li>
      <Link to={`${match.url}/eagles`}>
        Philadelphia Eagles
      </Link>
    </li>
    <li>
      <Link to={`${match.url}/redskins`}>
        Washington Redskins
      </Link>
    </li>
  </ul>
  </div>
)

const NFCNorthTeam = ({ match }) => (
  <div>
    <h3>{match.params.teamId}</h3>
  </div>
)

const NFCNorthTeams = ({ match }) => (
  <div>
  <ul>
    <li>
      <Link to={`${match.url}/bears`}>
        Chicago Bears
      </Link>
    </li>
    <li>
      <Link to={`${match.url}/lions`}>
        Detroit Lions
      </Link>
    </li>
    <li>
      <Link to={`${match.url}/packers`}>
        Green Bay Packers
      </Link>
    </li>
    <li>
      <Link to={`${match.url}/vikings`}>
        Minnesota Vikings
      </Link>
    </li>
  </ul>
  </div>
)

const NFCSouthTeam = ({ match }) => (
  <div>
    <h3>{match.params.teamId}</h3>
  </div>
)

const NFCSouthTeams = ({ match }) => (
  <div>
  <ul>
    <li>
      <Link to={`${match.url}/falcons`}>
        Atlanta Falcons
      </Link>
    </li>
    <li>
      <Link to={`${match.url}/panthers`}>
        Carolina Panthers
      </Link>
    </li>
    <li>
      <Link to={`${match.url}/saints`}>
        New Orleans Saints
      </Link>
    </li>
    <li>
      <Link to={`${match.url}/buccaneers`}>
        Tampa Bay Buccaneers
      </Link>
    </li>
  </ul>
  </div>
)

const NFCWestTeam = ({ match }) => (
  <div>
    <h3>{match.params.teamId}</h3>
  </div>
)

const NFCWestTeams = ({ match }) => (
  <div>
  <ul>
    <li>
      <Link to={`${match.url}/cardinals`}>
        Arizona Cardinals
      </Link>
    </li>
    <li>
      <Link to={`${match.url}/rams`}>
        Los Angeles Rams
      </Link>
    </li>
    <li>
      <Link to={`${match.url}/49ers`}>
        San Francisco 49ers
      </Link>
    </li>
    <li>
      <Link to={`${match.url}/seahawks`}>
        Seattle Seahawks
      </Link>
    </li>
  </ul>
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
      <li>
        <Link to={`${match.url}/AFCSouth`}>
          AFC South
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/AFCWest`}>
          AFC West
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/NFCEast`}>
          NFC East
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/NFCNorth`}>
          NFC North
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/NFCSouth`}>
          NFC South
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/NFCWest`}>
          NFC West
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Division}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a division.</h3>
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
        <Route path="/divisions/afceast" component={AFCEastTeams}/>
        <Route path="/divisions/afcnorth" component={AFCNorthTeams}/>
        <Route path="/divisions/afcsouth" component={AFCSouthTeams}/>
        <Route path="/divisions/afcwest" component={AFCWestTeams}/>
        <Route path="/divisions/nfceast" component={NFCEastTeams}/>
        <Route path="/divisions/nfcnorth" component={NFCNorthTeams}/>
        <Route path="/divisions/nfcsouth" component={NFCSouthTeams}/>
        <Route path="/divisions/nfcwest" component={NFCWestTeams}/>
    </div>
  </Router>
)

export default TheLeague;
