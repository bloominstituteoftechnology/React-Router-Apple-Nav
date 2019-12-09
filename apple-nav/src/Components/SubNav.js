import React, { Component } from 'react';


const SubNav = (props) => {
const id = props.match.params.id;

const subNav = props.subNavData[id];
const text = subNav[id] ? subNav[id].name : 'fail';
console.log(subNav.name);
 return (
      <div className="nav-item">
        {subNav.subLinks.map(sublink => {
            return <div>{sublink.name} <img src={sublink.img} /> </div>
        })}
        <p>{subNav.name}</p>
      </div>
    );
  
}

export default SubNav;