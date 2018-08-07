import React, { Component } from "react";
import { Link } from "react-router-dom";
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
            <Link className="productCardSubLink" to={product.url}>
              <img src={product.imgUrl} />
              <li>{product.productName}</li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}
