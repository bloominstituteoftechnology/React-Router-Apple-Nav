import React, { Component } from 'react';
import './App.css';

const SubNav = props =>{
return(
    <div className="subContainer">
        {props.items[props.match.params.id]}
    </div>
)
}
export default SubNav; 