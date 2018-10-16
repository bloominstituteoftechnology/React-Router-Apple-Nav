import React from "react";
import Nav from "./Nav";
import "./components.css";
import data from '../data';

class NavWrapper extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
      //set a property to hold the results of filter.
    };
  }

  componentDidMount() {
      this.setState({
          data: data
      })
  }
  
  //

  render() {
      return (
          <div className="navWrapper">
            {this.state.data.map(navItem => (
                <Nav key={navItem.name} navItem={navItem.name} />
            ))}
          </div>
      )
  }
}

export default NavWrapper;