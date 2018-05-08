import React, { Component } from 'react';
import Nav from './Nav';


class NavList extends Component {
    constructor() {
        super();
        this.state = {
            navItem: ['Apple Icon', 'Mac', 'iPad', 'iPhone', 'Watch', 'TV', 'Music', 'Support', 'Magnifying Glass', 'Clipboard Icon']
        }
    }
    render() {
        return (
            <div>
                <div>NavList</div>
                {this.state.navItem.map((item, index) => { return <Nav key={item + index} item={item} />})}
            </div>
        )
    }
}

export default NavList;