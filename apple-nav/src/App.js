import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavWrapper from './components/NavWrapper';
import navItems from './nav-items';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      //currentNav: null,
      //currentSubNav: null
    }
  }

  componentDidMount() {
    this.setState({data: navItems});
  }

  render() {
    return (
      <div className="App">
        <Route
          path="/"
          render={props => <NavWrapper {...props} navItems={this.state.data}/>}
        />
      </div>
    );
  }
}

export default App;
