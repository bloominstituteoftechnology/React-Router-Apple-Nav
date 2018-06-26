import React from 'react';

const NavItem = (props) => {
    console.log(props);
    return (
        <div>
            <p>NavItem</p>
            <p>{props.data.subcategory.map(sc => {return (<p>{sc}</p>)})}</p>
        </div>
    )
}
 
export default NavItem;