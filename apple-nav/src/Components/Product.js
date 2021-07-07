import React from 'react'; 
import {NavLink}  from 'react-router-dom'; 

const Product = props => {
    const product = props.match.params.product
    return (
        <div className = "sub-nav-item">
           <h1>{product}</h1>
        </div>
    )
}

export default Product; 