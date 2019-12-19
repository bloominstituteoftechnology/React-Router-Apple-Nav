import React from "react";
import { Link } from "react-router-dom";
const MainNav = props => {
  //   console.log(props);
  return (
    <nav className="main-nav">
      {props.data.map((item, i) => (
        <Link to={`/${item.name}`} key={i}>
          {item.name}
        </Link>
      ))}
    </nav>
  );
};
export default MainNav;
