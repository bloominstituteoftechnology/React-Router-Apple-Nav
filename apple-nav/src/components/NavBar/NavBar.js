import React from 'react';
import data from './buttonData';
import NavButton from './NavButton';

import './NavBar.css';

class NavBar extends React.Component {
    constructor() {
        super();
        this.state = {
            buttons: []
        }
    }

    componentDidMount() {
        this.setState({
            buttons: data
        })
    }

    render() {
        return (
            <div className="nav-bar-background">
                <div className="nav-bar-container">
                    {this.state.buttons.map((button) => <NavButton id={button.id} content={button.content} />)}
                </div>
            </div>
        );
    }
}

export default NavBar;