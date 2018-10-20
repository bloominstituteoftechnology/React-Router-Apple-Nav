import React from "react";
import { NavLink } from "react-router-dom";

const TopBar = props => {
  return (
    <div className="topBar">
      {props.navs.map(nav => <NavLink to={`/${nav.subnav}`}>{nav.subnav}</NavLink>)}
    </div>
  );
};
export default TopBar;
