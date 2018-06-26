import React from 'react';
import { Link } from 'react-router-dom';


const NavItem = (props) => {
    return (
        <div>
        {props.data.map(data =>
            <Link to="/">{data.subCategory}</Link>
        )}

    </div>
        
    )
}
 
export default NavItem