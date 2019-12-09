import React, { Component } from 'react';
import data from './Components/data';
import './App.css';
import NavWrapper from './Components/NavWrapper';
import SubNav from './Components/SubNav';
import {Route} from "react-router-dom";

class App extends Component {
  constructor(){
    super();
    this.state = {
      linkData: data
    }
  }

  // componentDidMount() {
  //   this.setState({
  //     linkData: data
  //   })
  // }

  render() {
    
    return (
      <div className="App">
        
        <Route path="/" render={props => <NavWrapper {...props} linkData={this.state.linkData} />}/>
        <Route path="/products/:id" 
        render={props => <SubNav {...props} subNavData={this.state.linkData}/>} />
        
      </div>
    );
  }
}

export default App;
