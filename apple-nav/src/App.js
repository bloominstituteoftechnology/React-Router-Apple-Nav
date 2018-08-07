import React, { Component } from 'react';
import './App.css';
import appleData from './appleData';
import Header from './components/Header';

class App extends Component {
  state = {
    links: [],
  };

  componentDidMount() {
    let links = JSON.parse(JSON.stringify(appleData));
    this.setState({
      links: links,
    });
  }
  
  render() {
    return (
      <div className="App">
       <Header links={this.state.links} />
      </div>
    );
  }
}

export default App;
