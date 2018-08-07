import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy';
import TopNav from './Components/TopNav';
import SubNav from './Components/SubNav';
import { Route } from 'react-router-dom';

class App extends Component {

  state = {
    data : [],
  }

  componentDidMount() {
    let links = JSON.parse(JSON.stringify(dummyData));
    this.setState({ data : links });
  }

  render() {
    return (
      <div className="App">
      <TopNav data={this.state.data}/>
      <Route path="/:name"
      render={props => (
        <SubNav {...props} data={this.state.data} />
      )}/>

      </div>
    );
  }
}

export default App;
