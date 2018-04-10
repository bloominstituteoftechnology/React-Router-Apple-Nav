import React from 'react';
import { Link } from 'react-router-dom';
import dummyData from '../dummyData';
import './MainNav.css';

const styled = {
    textDecoration: 'none',
    color: 'white'
};

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
    if(subData.sub.length === 0) return null;
    return (
        <div className="subNav">
            <div className="nav__links-Container">
                {subData.sub.map((data, index) => (
                    <div key={data.name + index} className="nav__links">
                        <Link to={`/${data.name}`} style={styled}>
                            {data.name}
                        </Link>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default SubNav;