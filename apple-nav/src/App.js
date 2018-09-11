import React, { Component } from 'react';
import NavWrapper from './components/NavWrapper';

class App extends Component {
  state = {
    links: [
      'link1',
      'link2',
      'link3',
      'link4'
    ]
  }
  render() {
    return (
      <div className="App">
      <NavWrapper links={this.state.links}/>
      </div>
    );
  }
}

export default App;
