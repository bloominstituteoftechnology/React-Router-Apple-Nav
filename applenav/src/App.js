import React, { Component } from 'react';
import './App.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import data from './data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      navData: []
    }
  }
  
  componentDidMount() {
    const dataCopy = data;
    this.setState({ navData: dataCopy })
  }
  
  render() {
    return (
      <div className="App">
        <Route
          path="/"
          render={props => <NavBar {...props} data={this.state.navData} />}
        />
      </div>
    );
  }
}

export default App;
