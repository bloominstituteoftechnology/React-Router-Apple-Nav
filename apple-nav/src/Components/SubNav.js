
import React from 'react';
import '.././App.css';
import './SubNav.css';

const SubNav = props => {
    return(
        <div className="sub-nav">
            {props.nav.find(nav => nav.subnav === props.match.params.subnav).navitems.map(navitem => (<div className="subitem"><div className="subtext">{navitem.name}</div></div>))}
        </div>
    )
}

export default SubNav;