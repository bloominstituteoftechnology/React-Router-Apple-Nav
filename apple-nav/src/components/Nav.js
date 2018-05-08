import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SubNavList from './SubNavList';


class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            macSubs: [
                "MacBook", "MacBook Air", "MacBook Pro", "iMac", "iMac Pro", "New", "Mac Pro", "Mac mini", "Accessories", "High Sierra", "Compare"
            ],
            iPadSubs: [
                "iPad Pro", "iPad", "New", "iPad mini 4", "iOS 11", "Accessories", "Compare"
            ],
            iPhoneSubs: [
                "iPhone X", "New", "iPhone 8", "New", "iPhone 7", "iPhone 6s", "iPhone SE", "iOS 11", "Accessories", "Compare"
            ]}
        
        }
    
    render() {
    const navStyles = {
            color: "white",
            textDecoration: "none",
            }
        return (
                <Link style={navStyles} to={`/${this.props.item}`}>{this.props.item}</Link>
              
        )
    }
    
}

export default Nav;