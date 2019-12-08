import React from 'react';
import '../App.css';

function productPage(props) {
    
    return (
        <div className='products-content'>
            {props.match.params.prod}
        </div>
    );
}

export default productPage;