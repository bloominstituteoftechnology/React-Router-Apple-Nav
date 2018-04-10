import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav/Nav'
import {Route, Switch} from 'react-router-dom';
import Page from './Components/Page/Page';
import Missing from './Components/404/Missing';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path='/' render={(props) => <Page {...props} />}/>
          <Route  path='/pages/:name' render={(props) => <Page {...props} />} />
          <Route component={Missing} />
        </Switch>
      </div>
    );
  }
}
export default App;
