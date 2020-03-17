import React from "react";
import { NavLink } from "react-router-dom";

const TopNav = props => {
  return (
    <div className="top-nav">
      <NavLink exact to="/" className="apple-icon">
        <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_large.svg" />
      </NavLink>
      {props.data.map(item => (
        <NavLink to={`/${item.category.toLowerCase()}`} key={item.category}>
          {item.category}
        </NavLink>
      ))}

      <NavLink exact to="/" className="search-icon">
        <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg" />
      </NavLink>

      <NavLink exact to="/" className="bag-icon">
        <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/bag/image_large.svg" />
      </NavLink>
    </div>
  );
};

export default TopNav;
