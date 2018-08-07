import React, {Component} from 'react';
import DATA from '../../src/main_nav.json';



const getSub = (ID) => {
    const data = DATA;
    let subObj;
    let values;
    for (let i = 0; i < data.length; i++) {
        values = Object.values(data[i]);
        if (values.indexOf(ID) > -1) subObj = data[i];
    }
    return subObj;
}

const SubNav = props => {
    const list = props.match.params.ID;
    const subData = getSub(list);
    
    return (
        <div className="links-container">
            {subData.sub.map((data, index) => (
                <div key={index} className="nav-links">
                    {data.name}
                </div>
            ))}
        </div>

    );
};

export default SubNav;