import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import { data, productData } from "./apple-data";
import SubNav from './components/SubNav';
import Route from "react-router-dom/Route";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      mac: productData[0],
      ipad: productData[1],
      iphone: productData[2],
      watch: productData[3],
      tv: productData[4],
      music: productData[5]
    };
  }
  componentDidMount = () => {
    this.setState({
      data: data
    });
  };
  render() {
    return (
      <div className="App">
        <Route
          path="/"
          render={props => <Nav {...props} data={this.state.data} />}
        />
        <Route path="/Mac"
          render={props => <SubNav {...props} mac={this.state.mac} />}
        />
        <Route path="/ipad"
          render={props => <SubNav {...props} mac={this.state.ipad} />}
        />
        <Route path="/iphone"
          render={props => <SubNav {...props} mac={this.state.iphone} />}
        /> <Route path="/watch"
          render={props => <SubNav {...props} mac={this.state.watch} />}
        /> <Route path="/tv"
          render={props => <SubNav {...props} mac={this.state.tv} />}
        /> <Route path="/music"
          render={props => <SubNav {...props} mac={this.state.music} />}
        />
      </div>
    );
  }
}

export default App;
