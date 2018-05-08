import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav';


class NavList extends Component {
    constructor() {
        super();
        this.state = {
            navItem: ['Apple Icon', 'Mac', 'iPad', 'iPhone', 'Watch', 'TV', 'Music', 'Support', 'Magnifying Glass', 'Clipboard Icon']
        }
    }
    render() {
       const styles= {
            display: "flex",
            justifyContent: "space-around", 
            alignItems: "center",
            backgroundColor: "darkgray",
            height: "50px",
            color: "white",
            paddingRight: "100px",
            paddingLeft: "100px"
        }
        return (
            <div style={styles}>
                {this.state.navItem.map((item, index) => { return <Nav key={item + index} item={item} />})}
            </div>
        )
    }
}

export default NavList;