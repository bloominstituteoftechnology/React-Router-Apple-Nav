import React from "react";
import { NavLink } from "react-router-dom";

const TopNav = props => {
  return (
    <div className="top-nav">
      <NavLink exact to="/">
        <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_large.svg" />
      </NavLink>
      {props.data.map(item => (
        <NavLink to="/">{item.category}</NavLink>
      ))}
    </div>
  );
};

export default TopNav;
