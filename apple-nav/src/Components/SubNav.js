import React from 'react';
import { useParams } from 'react-router-dom';

const SubNav = ({data}) => {
    console.log("I'm subnav props:", data)
    
    const params = useParams();
    console.log("params", params);

    const subnavData = data.find(item => item.id === params.id)
    console.log("I'm subnavdata", subnavData.subnav);

    const subnavLinks = subnavData.subnav;
    console.log("I'm subnav links:", subnavLinks)

    return (
        <div className="subnav">
            {subnavLinks.map(link => (
                <p>{link}</p>
            ))}
        </div>
    );
}

export default SubNav;