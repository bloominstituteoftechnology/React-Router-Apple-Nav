import React from 'react';
import { NavLink } from 'react-router-dom';

function SubNav(props) {
    const category = props.categories.find(category =>
    category.id === props.match.params.id);
    return (
        <div className='sub-nav'>
            <ul className='sub-nav-items'>
                {props.category.products.map(product => (
                <li className='sub-nav-item' key={product.prodID}>
                    <NavLink 
                        exact activeClassName='activeSubNavButton' 
                        to={`/navbar/${category.id}/${product.prodID}`}
                    >
                    {product.name}
                    </NavLink>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default SubNav;