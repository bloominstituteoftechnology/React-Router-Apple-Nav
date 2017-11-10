import React from 'react';
import { Link } from 'react-router-dom';

const SubNav = (props) => {
    if ( !props.storage.mainNav ) return <h1>...Loading SubNav</h1>
    const id = props.routeProps.match.params.subnav;
    const data = props.storage.mainNav[id];
    return (
        <ul className="sub-nav">
            { data.subNav.map((tab, i) => {
                return <li key={i}><Link to={`/mac/${id}/${i}`}> { tab.linkName } </Link></li>;
            }) }
        </ul>
    );
};

export default SubNav;