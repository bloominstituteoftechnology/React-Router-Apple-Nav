import React from 'react';
import { NavLink } from 'react-router-dom';

function SubNav(props) {
    const category = categories.find(category =>
    category.id === props.match.params.id);
    return (
        <div className='sub-nav'>
            {category.products.map(product => (
            <div className='sub-nav-item' key={product.id}>
                {product.name}
            </div>
            ))}
        </div>
    );
}

export default SubNav;
