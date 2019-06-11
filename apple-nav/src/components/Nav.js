import React from "react";

const Nav = props => {
  console.log(props.link.name);
  return <p>{props.link.name}</p>;
};

export default Nav;
