import React from "react";
import Nav from "./Nav";

const NavWrapper = props => {
  return (
    <div className="nav-wrapper">
      <Link exact to="/">
        <button className="home-btn">Home</button>
      </Link>
      {props.nav.map(nav => (
        <Nav nav={nav} />
      ))}
    </div>
  );
};

export default NavWrapper;
