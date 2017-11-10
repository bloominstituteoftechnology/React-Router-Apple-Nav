import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/ListA">ListA</Link>
        </li>
        <li>
          <Link to="/ListB">ListB</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/ListA" component={ListA} />
      <Route path="/ListB" component={ListB} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Welcome to List A and List B's homeworld.</h2>
  </div>
);

const ListA = ({ match }) => (
  <div>
    <h2>ListA</h2>
    <ul>
      <li>
        <Link to={`${match.url}/A1`}>1</Link>
      </li>
      <li>
        <Link to={`${match.url}/A2`}>2</Link>
      </li>
      <li>
        <Link to={`${match.url}/A3`}>3</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:ListId`} component={List} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Choose a List A Item</h3>}
    />
  </div>
);

const ListB = ({ match }) => (
  <div>
    <h2>ListB</h2>
    <ul>
      <li>
        <Link to={`${match.url}/B1`}>1</Link>
      </li>
      <li>
        <Link to={`${match.url}/B2`}>2</Link>
      </li>
      <li>
        <Link to={`${match.url}/B3`}>3</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:ListId`} component={List} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Choose a List B Item</h3>}
    />
  </div>
);

const List = ({ match }) => (
  <div>
    <h3>{match.params.ListId}</h3>
  </div>
);

export default BasicExample;
