import React, { Component } from "react";

import "./SubNav.css";

export default class SubNav extends Component {
  constructor(props) {
    super(props);
    console.log(props.data);
    this.state = {
      data: props.data
    };
  }
  render() {
    return (
      <div className="subNavWrapper">
        <ul>
          {this.state.data.map(product => (
            <div className="productCardSubLink">
              <li>{product.productName}</li>
              <li>{product.img}</li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
