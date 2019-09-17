import React from "react";
import { NavLink } from "react-router-dom";

function SubNav(props) {
  return (
    <div>
      {!props.navInfo
        ? null
        : props.navInfo[1].map((value, index) => (
            <NavLink to={`${value.split(" ").join("")}`}>{`${value}`}</NavLink>
          ))}
    </div>
  );
}

export default SubNav;
