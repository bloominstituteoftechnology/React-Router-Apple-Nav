import React from "react";
import { NavLink } from "react-router-dom";
import data from "../data";

const Home = () => {
  return (
    <nav>
      <NavLink to="/">
        <img
          src="https://www.apple.com/ac/globalfooter/3/en_US/assets/ac-footer/breadcrumbs/apple/icon_large.svg"
          alt="large apple icon"
        />
      </NavLink>

      {data.map(item => (
        <NavLink to={`/${item.name}`} key={item.name}>
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Home;
