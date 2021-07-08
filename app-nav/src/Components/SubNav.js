import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const SubNav = props => {
    console.log(props);
    return (
        <div className="subNavWrap" >
            {props.subItems[props.match.params.salamander]}
        </div>
    )
}


export default SubNav;