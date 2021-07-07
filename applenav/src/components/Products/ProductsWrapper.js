import React from "react";
import { NavLink, Link, Route } from "react-router-dom";
import "./Products.css";

// import Products from "./Products";
import Mac from "./Mac";
import Ipad from "./iPad";
import Iphone from "./iPhone";
import Watch from "./Watch";
import Tv from "./TV";
import Music from "./Music";

const navLinks = ["Mac", "iPad", "iPhone", "Watch", "TV", "Music", "Support"];

const ProductsWrapper = props => {
  return (
    <div>
      <Route path="/Mac" component={Mac} />
      <Route path="/iPad" component={Ipad} />
      <Route path="/iPhone" component={Iphone} />
      <Route path="/Watch" component={Watch} />
      <Route path="/TV" component={Tv} />
      <Route path="/Music" component={Music} />
      <Route path="/Support" />
    </div>
  );
};

export default ProductsWrapper;
