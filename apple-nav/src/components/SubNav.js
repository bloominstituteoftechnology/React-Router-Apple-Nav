import React from "react";
import { Link } from "react-router-dom";
const SubNav = props => {
  const itemName = props.match.params.itemName;
  const subData = props.data[itemName];
  console.log(props.data);
  return (
    <div className="sub-nav">
      {subData.subLinks.map(item => (
        <Link to={`/`} key={item.name}>
          <img src={item.img} alt={item.name} />
          <div>{item.name}</div>
        </Link>
      ))}
    </div>
  );
};
export default SubNav;
