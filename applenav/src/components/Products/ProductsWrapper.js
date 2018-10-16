import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Products.css";

import Products from "./Products";

const ProductsWrapper = props => {
  return (
    <div className="products">
      <Products />
    </div>
  );
};

export default ProductsWrapper;
