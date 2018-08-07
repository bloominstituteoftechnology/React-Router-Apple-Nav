import React from 'react';
import Nav from './Nav';

const SubNav = (props) => {
    return (
        <div className="subnav-bg">
            <div className="subnav" style={{width: props.width}}>
                {props.list.map(link => <Nav link={link} />)}
            </div>
        </div>
    )
}

export default SubNav;