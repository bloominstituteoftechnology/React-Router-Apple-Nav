import React from 'react';
import styled from 'styled-components';

const Products = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-decoration: none;
    height: 3rem;
    padding: 0 5rem;
    font-size: 1.2rem;
    color: white;
    background: #403C3B;
`;

const SubNav = props =>{
    return(
        <div>
            <Products>
                <i className="fas fa-laptop"></i>
                <i className="fas fa-laptop"></i>
                <i className="fas fa-laptop"></i>
                <i className="fas fa-laptop"></i>
                <i className="fas fa-laptop"></i>
                <i className="fas fa-laptop"></i>
                <i className="fas fa-laptop"></i>
                <i className="fas fa-headphones"></i>
                <i className="fab fa-apple"></i>
                <i className="fas fa-tv"></i>
            </Products>
            <Products>
                {props.products.map(product => (
                    <div key={product.id}>
                        {product.products}
                    </div>
                ))}
            </Products>
        </div>
    )
}


export default SubNav;