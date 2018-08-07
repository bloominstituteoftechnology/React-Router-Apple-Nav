import React from 'react';
import data from '../Data';

class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {products: data}
    }
    render(){
        return (this.state.products.map(product =>  (
            <div key={product.id}>
                {product.name}
            </div>
        ))
    )}
    
    
}

export default Nav;
