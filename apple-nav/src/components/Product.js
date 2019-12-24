import React from "react";
import "./components.css";
const Product = props => {
  return (
    <div className="productDiv">
      <img src={props.product.imgURL} alt={props.product.name} />
      <span>{props.product.name}</span>
    </div>
  );
};


export default Product;