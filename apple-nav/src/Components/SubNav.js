import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import dummyData from '../dummyData';
import './MainNav.css';

const getSub = (mainID) => {
    const data = dummyData;
    let subObj;
    let values;
    for (let i = 0; i < data.length; i++) {
        values = Object.values(data[i]);
        if (values.indexOf(mainID) > -1) subObj = data[i];
    }
    return subObj;
}

const SubNav = props => {
    const list = props.match.params.mainID;
    const subData = getSub(list);
    console.log(subData)
    console.log(props)
    return (
        <div className="nav-links-container">
            {subData.sub.map((data, index) => (
                <div key={data.name + index} className="nav-links">
                    {data.name}
                </div>
            ))}
        </div>
    );
};

export default SubNav;