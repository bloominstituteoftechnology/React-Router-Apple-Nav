////navigation link for each parent category
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';



const Nav = (props) => {
    return (
        <div>
            {props.data.map(data =>
                <Link to="/">{data.category}</Link>
            )}

        </div>
    )
}
 
export default Nav;