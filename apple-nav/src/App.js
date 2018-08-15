import React, { Component } from 'react';
import './App.css';


const NavMain = ["Mac", "iPad", "iPhone", "Watch", "Tv", "Music", "Support"];



class App extends Component {
  render() {
    return (
      <div className="App">
      <ul>
        {NavMain.map(each => <Nav list={each} />)}
      </ul>
        
      </div>
    );
  }
}


class Nav extends Component {
  render() {
    return (
      <ul>
        {this.props.list}
      </ul>
    )
  }
}


export default App;
