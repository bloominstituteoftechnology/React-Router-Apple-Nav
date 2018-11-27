import React from "react";
import { NavLink } from "react-router-dom";
// import data from "../data";

const Home = props => {
  return (
    <nav>
      <NavLink to="/">
        <img
          src="https://www.apple.com/ac/globalfooter/3/en_US/assets/ac-footer/breadcrumbs/apple/icon_large.svg"
          alt="large apple icon"
        />
      </NavLink>

      {props.data.map(item => (
        <div
          key={item.name}
          className="main-nav-item"
          onClick={() => props.history.push(`/${item.name}`)}
        >
          {item.name}
        </div>
      ))}
    </nav>
  );
};

export default Home;
