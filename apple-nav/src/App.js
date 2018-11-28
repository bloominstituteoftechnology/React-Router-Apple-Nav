import React, { Component, Fragment } from "react";
import "./App.css";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import data from "./data";
import Home from "./components/Home";
import SubNav from "./components/SubNav";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: data
    };
  }

  render() {
    console.log(this.props.location, this.props.location.pathname);
    return (
      <div className="App">
        <Route
          path="/"
          render={props => <Home {...props} data={this.state.data} />}
        />
        <Fragment>
          <TransitionGroup style={{ position: "relative" }}>
            <CSSTransition
              key={this.props.location.pathname}
              timeout={500}
              classNames="fade"
            >
              <Switch location={this.props.location}>
                <Route
                  path="/:name"
                  render={props => <SubNav {...props} data={this.state.data} />}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </Fragment>

        <h1>
          Welcome to Pretend Apple Nav Homepage!
          <br />
          Hope you hate it!
        </h1>
      </div>
    );
  }
}

export default withRouter(App);

{
  /* <TransitionGroup>
  <CSSTransition
    key={this.props.location.pathname}
    timeout={500}
    classNames="fade"
  >
    <Switch location={this.props.location}>
      <Route
        exact
        path="/"
        component={() => (
          <div className="page">
            <h1>Home</h1>
          </div>
        )}
      />
      <Route
        exact
        path="/about"
        component={() => (
          <div className="page">
            <h1>About</h1>
          </div>
        )}
      />
    </Switch>
  </CSSTransition>
</TransitionGroup>; */
}
