import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import SubNav from './components/NavBar/SubNav';
import PageMissing from './components/PageMissing/PageMissing';
import data from './components/NavBar/buttonData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      buttons: []
    }
  }

  componentDidMount() {
    this.setState({
      buttons: data
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar buttons={this.state.buttons} />
        <Switch>
          <Route exact path="/" component ={ null } />
          <Route exact path="/home" render={() => <Redirect exact to="/" />} />
          <Route exact path="/:id" render={props => {
            if (!this.state.buttons.length) {
              return <h2>Loading...</h2>
            } else {
              return <SubNav {...props} buttons={this.state.buttons} />
            }
          }} />
          <Route component={PageMissing} />
        </Switch>
      </div>
    );
  }
}

export default App;
