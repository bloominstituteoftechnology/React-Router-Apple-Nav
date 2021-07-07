import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';


import NavWrapper from './components/NavWrapper';
import NavData from './NavData'
import SubNav from './components/SubNav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavData:[]
    }
  }

  componentDidMount(){
    this.setState({
      NavData:NavData
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Route
            path="/"
            render={() => <NavWrapper data={this.state.NavData} />}/>
        </div>
        <Route
        path="/:name"
        render={props => <SubNav {...props} data={this.state.NavData} />}/>
      </div>
    );
  }
}

export default App;
