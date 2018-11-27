import React from "react";
import { NavLink } from "react-router-dom";

const SubNav = props => {
  console.log(props);
  const name = props.data.find(
    item => `${item.name}` === props.match.params.name
  );
  console.log(name);
  return (
    <nav className="sub-nav">
      {name.subLinks.map(item => (
        <NavLink to={`/${name.name}/${item.name}`} key={item.name}>
          <div className="img-container">
            <img src={item.img} alt={item.name} />
          </div>
          <p className="sub-heading">{item.name}</p>
        </NavLink>
      ))}
    </nav>
  );
};

export default SubNav;
