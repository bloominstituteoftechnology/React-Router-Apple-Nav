import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import navLinks from './data';
import './App.css';
import NavWrapper from './components/NavWrapper';
import SubNav from './components/SubNav';

class App extends Component {
  state = {
    links: []
  }

  componentWillMount() {
    this.setState({ links: navLinks })
  }

  render() {
    return (
      <div className="container">
        <NavWrapper links={this.state.links}/>
        <Route path="/:name" render={ (props) =>
          <SubNav {...props} />
        } />
      </div>
    );
  }
}

export default App;
