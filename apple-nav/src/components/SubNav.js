import React from 'react';

const SubNav = (props) => {
    return (
        <div className="subnav">
            {props.sub.name}
            {props.sub.new ? <p>New!</p> : null}
        </div>
    )
    
}
 
export default SubNav;