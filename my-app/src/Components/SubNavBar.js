import { NavLink } from "react-router-dom";
import React from "react";

const SubNavBar = props => {
  console.log(props);
  const { bananaurl } = props.match.params; // we deconstructed this!
  return (
    // in this return we are mapping the items array (see console) with the bananaurl (that we matched to params on line 6 )  (if you dont know how we got this, inspect console >under match > params notice the bananaurl we passed from app.js)
    <div className="subwrap">
      {props.items[bananaurl].map(item => (
        <NavLink to={`/${bananaurl}/${item}`} activeClassName="active">
          {item}
        </NavLink> // in this navlink we are matching each bananaurl to the sub item we mapped from the items array.
      ))}
    </div>
  );
};
export default SubNavBar;
