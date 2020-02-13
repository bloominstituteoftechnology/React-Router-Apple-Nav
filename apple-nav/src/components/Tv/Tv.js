import React, { Component } from "react";
import data from "../../data";
class Tv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: data.tv.models
    };
  }

  render() {
    return (
      <ul>
        {this.state.items.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    );
  }
}
export default Tv;
