import React, { Component } from 'react';
import Nav from './Nav';
import navItems from '../nav-items';

class NavWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            currentNav: null,
            currentSubNav: null
        }
    }

    componentDidMount() {
        this.setState({data: navItems});
    }

    render() {
        return (
            <div>
                <Nav />
            </div>
        )
    }
}
 
export default NavWrapper;