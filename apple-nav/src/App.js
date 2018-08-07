import React, { Component } from "react";
import dummydata from "./DummyData";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SubNavBar from "./components/SubNavBar";
import ItemPage from "./components/ItemPage";

class App extends Component {
  state = {
    links: [],
  };

  componentDidMount() {
    let links = JSON.parse(JSON.stringify(dummydata));
    this.setState({
      links: links,
    });
  }

  render() {
    return (
      <div>
        <Navbar links={this.state.links} />
        <Route
          path="/:name"
          render={(props) =>
            this.state.links.some(link => link.name === props.match.params.name) 
            ? <SubNavBar {...props} links={this.state.links}/>
            : <ItemPage {...props} links={this.state.links} />
             }
        />
      </div>
    );
  }
}

export default App;