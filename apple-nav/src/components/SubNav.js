import React, { Component } from 'react';
import './SubNav.css';

class SubNav extends Component {
    render() {
        return (
            <div className="SubNav">
            {
                (this.props.match.params.product)
            }
            </div>
        );
    }
}

export default SubNav;