import { NavLink } from "react-router-dom";
import React from "react";

const SubNavBar = props => {
  console.log(props);
  const { bananaurl } = props.match.params;
  return (
    <div>
      {props.items[bananaurl].map(item => (
        <NavLink to={`/${bananaurl}/${item}`} activeClassName="active">
          {item}
        </NavLink>
      ))}
    </div>
  );
};
export default SubNavBar;
