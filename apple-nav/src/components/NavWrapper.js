import React from "react";
import { Link, NavLink, Route } from "react-router-dom";


import './NavWrapper.css';
import SubNav from './SubNav';





const products = [
    {
        id: '1',
        name: 'Mac',
    },
    {
        id: '2',
        name: 'iPad',
    },
    {
        id: '3',
        name: 'iPhone',
    },
    {
        id: '4',
        name: 'Watch',
    },
    {
        id: '5',
        name: 'TV',
    },
    {
        id: '6',
        name: 'Music',
    },
    {
        id: '7',
        name: 'Support',
    }
];







const NavWrapper = props => {
    return (
        <div>
            <header className="Nav-header">
                <div>
                    <i className="fa fa-apple fa-2x" aria-hidden="true"></i>
                </div>
                {products.map(product => (
                    <div>
                        <NavLink key={product.id} exact activeClassName="activeNavButton" to={`/${product.id}`}>
                            {product.name}
                        </NavLink>
                    </div>
                ))}
                <div>
                    <i className="fa fa-search fa-2x" aria-hidden="true"></i>
                </div>
                <div>
                    <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
                </div>
            </header>
            <Route
                exact
                path="/1"
                render={props => <SubNav {...props} products={products} />}
            />
        </div>
    );
}



export default NavWrapper;