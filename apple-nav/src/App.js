import React, { Component } from 'react';
import './App.css';
import NavWrapper from './components/NavWrapper';
// import SubNav from './components/SubNav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavWrapper />
        {/* <SubNav /> */}
      </div>
    );
  }
}

export default App;
