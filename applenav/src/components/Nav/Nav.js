import React from "react";
import { NavLink, Link, Route } from "react-router-dom";
import "./Nav";

const navLinks = ["Mac", "iPad", "iPhone", "Watch", "TV", "Music", "Support"];

const Nav = props => {
  return (
    <div className="nav-items">
      <Link to="/">
        <img
          src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_large.svg"
          alt="apple logo"
        />
      </Link>
      {navLinks.map(link => {
        return (
          <NavLink to={`/${link}`} key={link}>
            {link}
          </NavLink>
        );
      })}
      <Link to="/search">
        <img
          src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg"
          alt="search icon"
        />
      </Link>
      <Link to="/bag">
        <img
          src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/bag/image_large.svg"
          alt="shopping bag icon"
        />
      </Link>
    </div>
  );
};

export default Nav;
