import React from "react";
import { Route } from "react-router-dom";
import Mac from "./SubNavComponents/Mac";
import iPhone from "./SubNavComponents/iPhone";
import iPad from "./SubNavComponents/iPad";

const SubNav = props => {
   const subData = props.subData;
//    console.log(subData)

console.log(props);
  return (
    <div>
      <p>SubNav</p>
      {props.data.map((subcategory, index) => 
         
         <p key={index} subData={subcategory}> {subcategory.name} </p>
)}  
    </div>
  );
};

export default SubNav;
