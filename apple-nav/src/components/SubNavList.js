import React, { Component } from 'react';
import { Route } from 'react-router-dom'


class SubNavList extends Component {
    constructor() {
        super();
        this.state = {
            macSubs: [
                "MacBook", "MacBook Air", "MacBook Pro", "iMac", "iMac Pro", "New", "Mac Pro", "Mac mini", "Accessories", "High Sierra", "Compare"
            ],
            iPadSubs: [
                "iPad Pro", "iPad", "New", "iPad mini 4", "iOS 11", "Accessories", "Compare"
            ],
            iPhoneSubs: [
                "iPhone X", "New", "iPhone 8", "New", "iPhone 7", "iPhone 6s", "iPhone SE", "iOS 11", "Accessories", "Compare"
            ]
        }
    }
    render() {
        return (
            <div>SubNavList</div>
        
        )
    }
}

export default SubNavList;