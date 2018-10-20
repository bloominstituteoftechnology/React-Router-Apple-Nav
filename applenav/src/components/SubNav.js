import React from "react";
import { Link } from 'react-router-dom';


const SubNav = props => {
  return (
    <div className="navItem">
      <Link to="/"><img src={props.item.img} /></Link>
    </div>
  );
};
export default SubNav;