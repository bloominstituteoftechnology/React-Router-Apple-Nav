import React from "react";
import { Link } from "react-router-dom";

const SubNav = props => {
  const itemName = props.match.params.itemName;
  const selected = props.data.find(selected => selected.name === itemName);

  return (
    <div className="sub-nav">
      {selected.subLinks.map(item => (
        <Link
          to={`/${itemName}/${item.name.split(" ").join("-")}`}
          key={item.name}
        >
          <img src={item.img} alt={item.name} />
          <div>{item.name}</div>
        </Link>
      ))}
    </div>
  );
};
export default SubNav;
