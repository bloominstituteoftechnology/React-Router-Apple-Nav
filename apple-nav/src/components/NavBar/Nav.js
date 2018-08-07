import React from 'react';
import data from '../Data';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const ProductDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 4rem;
    padding: 0 10rem;
    font-size: 0.8rem;
    text-decoration: none;
    background: black;
    color: white;
  }
`;

class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {products: data}
    }
    render(){
        return (
            <ProductDiv>
                {this.state.products.map(product =>  (
                <NavLink to={`/${product.name}/`} key={product.id}>{product.name}</NavLink>
            ))}
            </ProductDiv>
    )}
}

export default Nav;
