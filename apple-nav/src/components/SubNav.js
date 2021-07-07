import React, { Component } from 'react';
import '../index.css';

const SubNav = props => {
        // console.log('from subnav', props)
        // console.log('from subnav props.product.subLinks', props.subLinks)

        return (
            <div className='subNav-container'>
                    {(props.product.name === props.currentNav) &&
                        props.subLinks.map((link, index) => (
                            <img 
                                src={link.img}
                                key={index}
                                /> 
                                ))}
            </div>
        );
    }

export default SubNav;


