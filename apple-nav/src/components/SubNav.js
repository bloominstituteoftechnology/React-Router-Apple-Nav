import React, { Component } from 'react';
import '../index.css';

class SubNav extends Component {
    render() {
        return (
            <div className='subNav-container'>
                <div className="icon">
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
                    <i class="fas fa-headphones-alt"></i>
                    Accessories
                </div>
            </div>
        );
    }
}

export default SubNav;


