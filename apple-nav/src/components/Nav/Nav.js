import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Nav.css";
// import Mac from "./Mac";

const Nav = props => {
  return (
    <nav
      className="nav-wrapper"
      style={
        props.location.pathname === "/"
          ? { background: "rgba(0,0,0,.8)" }
          : { background: "#000" }
      }
    >
      <div className="nav-container">
        <Link to="/">
          <img
            src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_large.svg"
            alt="apple"
          />
        </Link>
        <Link to="/mac">
          <h3>Mac</h3>
        </Link>
        <h3>iPad</h3>
        <h3>iPhone</h3>
        <h3>Watch</h3>
        <h3>TV</h3>
        <h3>Music</h3>
        <h3>Support</h3>
        <img
          src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg"
          alt="search"
        />
        <img
          src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/bag/image_large.svg"
          alt="store"
        />
      </div>
    </nav>
  );
};

export default Nav;
