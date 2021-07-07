import React from 'react';
import { Link } from 'react-router-dom';
import dummyData from '../dummyData';
import './MainNav.css';

const styledD = {
    textDecoration: 'none',
    color: 'white'
};

const styledL = {
    textDecoration: 'none',
    color: 'black'
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
        <div className={`subNav ${subData.bg}`}>
            <div className="nav-links-container">
                {subData.sub.map((data, index) => (
                    <div key={data.name + index} className="nav-links">
                        <Link to={`/${data.name}`} style={subData.bg === 'dark' ? styledD : styledL}>
                            <div className="nav-links-item">
                                <img src={data.img} alt={data.name}/>
                                {data.name}
                            </div>
                        </Link>
                    </div> 
                ))}
            </div>
        </div>
    );
};

export default SubNav;