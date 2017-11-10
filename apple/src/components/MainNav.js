import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = (props) => {
    if(!props.storage.mainNav) { 
        return <h1>...Loading Nav</h1>
    } else {
        return (
            <div>
                <ul>
                { props.storage.mainNav.map((tab, i) => {
                        return <li key={i + 1000}><Link to={`/mac/${i}`}>{tab.linkName}</Link></li>
                    }) }
                </ul>
            </div>
            );
    }    
};

export default MainNav;
