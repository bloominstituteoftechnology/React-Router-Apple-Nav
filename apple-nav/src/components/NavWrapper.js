import React from "react";
import "../index.css";
import navData from "./navData";

const NavWrapper = () => {
  return (
    <div className="nav-wrapper">
      <ul>
        {navData.map(nav => {
          return (
            <Link to={"/"}>
            <li key={nav.id}>
              <h4>{nav.subnav}</h4>
            </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default NavWrapper;
