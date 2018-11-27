import React, { Component } from 'react';
import '../index.css';

const SubNav = props => {
        // console.log('from subnav', props.product.name)
        // console.log('from subnav props.product.subLinks', props.subLinks)
        return (
            <div className='subNav-container'>
                {/* <div className="icon">
                    <i className="fas fa-laptop"></i>
                    MacBook
                </div>
                <div className="icon">
                    <i className="fas fa-laptop mac-air"></i>
                    MacBook Air
                </div>
                <div className="icon">
                    <i className="fas fa-laptop mac-pro"></i>
                    MacBook Pro
                </div>
                <div className="icon">
                    <i className="fas fa-desktop"></i>
                    iMac
                </div>
                <div className="icon imac-pro">
                    <i className="fas fa-desktop"></i>
                    iMac Pro
                </div>
                <div className="icon">
                    <i className="fas fa-headphones-alt"></i>
                    Accessories
                </div> */}
                {/* {props.product.name.subLinks} */}
                {props.subLinks.map((link, index) => (
                    <img 
                        src={link.img}
                        key={index}
                    />
                ))}
            </div>
        );
    }

export default SubNav;


