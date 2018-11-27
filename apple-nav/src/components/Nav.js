import React, { Component } from 'react';
import '../index.css';
import { NavLink } from 'react-router-dom';

const Nav = props => {
        // console.log("from nav..", props.product)
        return (
            <div className='nav-container'>
                {/* <NavLink to='/'>
                    <i className="fab fa-apple"></i>
                </NavLink>
                <NavLink to='/products/mac'>
                    Mac
                </NavLink>
                <NavLink to='/products/ipad'>
                    iPad
                </NavLink>
                <NavLink to='/products/iphone'>
                    iPhone
                </NavLink>
                <NavLink to='/products/watch'>
                    Watch
                </NavLink>
                <NavLink to='/products/tv'>
                    TV
                </NavLink>
                <NavLink to='/products/music'>
                    Music
                </NavLink>
                <div>
                    <i className="fas fa-search"></i>
                </div>
                <NavLink to='/account/'>
                    <i className="fas fa-shopping-bag"></i>
                </NavLink> */}

        {/* <i onClick={this.incrementLike} className="far fa-heart"></i> */}


                <NavLink to='/'>
                    <i className="fab fa-apple"></i>
                </NavLink>

                {props.product.map((e, index) => (
                    <div onClick={props.changeNav} key={index} value={e.name}>
                        {e.name}
                    </div>
                ))}

                <div>
                    <i className="fas fa-search"></i>
                </div>
                <NavLink to='/account/'>
                    <i className="fas fa-shopping-bag"></i>
                </NavLink>
            </div>
        );
    }

export default Nav;


