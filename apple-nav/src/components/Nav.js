import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    const data = props.data;
    return (
        <div>
            {props.data.map((category) => 
                <Link key={Math.random()} to='/mac' data={data}>{category.name}</Link>
            )}
        </div>
    )
}
 
export default Nav;