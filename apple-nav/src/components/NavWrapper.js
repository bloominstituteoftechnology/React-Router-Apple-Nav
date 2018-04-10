import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: [] 
        }
    }

    componentDidMount () {
        this.setState({menuItems: [...this.props.menuItems]}) // this step ensures state remains immutable since arrays are 'by reference' types
    }

    render() {
        return (
            <Nav menuItems={this.state.menuItems}/>
        )
    }

}


const Nav = ({ menuItems }) => {
    return (
        <ul>
            {menuItems.map((menuVal) => {
                return <li>{menuVal}</li>
            })}
          
        </ul>
    )
}


export default NavWrapper;