import React, { Component } from 'react';
import Home from './Home';
import MacMain from './components/mac/MacMain';
import IPadMain from './components/iPad/IPadMain';
import IPhoneMain from './components/iPhone/IPhoneMain';
import WatchMain from './components/watch/WatchMain';
import TvMain from './components/tv/TvMain';
import MusicMain from './components/music/MusicMain';
import data from './data'
import './App.css';
import {Route, NavLink} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      someData: data,
      stuff: 'stufff'
    }
  }

  // componentDidMount() {
  //   this.setState({someData: data })
  // }

  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to="/"><img src="#" alt="logo"/></NavLink>
          <NavLink activeClassName="selected" to="/mac">Mac</NavLink>
          <NavLink activeClassName="selected" to="/ipad">iPad</NavLink>
          <NavLink activeClassName="selected" to="/iphone">iPhone</NavLink>
          <NavLink activeClassName="selected" to="/watch">Watch</NavLink>
          <NavLink activeClassName="selected" to="/tv">TV</NavLink>
          <NavLink activeClassName="selected" to="/music">Music</NavLink>
        </nav>
        <Route exact path="/" render={props => <Home {...props} data={this.state.someData} />} />
        <Route path="/mac" render={props => <MacMain {...props} data={this.state.someData} />} />
        <Route path="/ipad" render={props => <IPadMain {...props} data={this.state.someData} />} />
        <Route path="/iphone" render={props => <IPhoneMain {...props} data={this.state.someData} />} />
        <Route path="/watch" render={props => <WatchMain {...props} data={this.state.someData} />} />
        <Route path="/tv" render={props => <TvMain {...props} data={this.state.someData} />} />
        <Route path="/Music" render={props => <MusicMain {...props} data={this.state.someData} />} />
      </div>
    );
  }
}

export default App;