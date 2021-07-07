import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class IPhones extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                {this.props.iphones.map(iphone => <Link to={`/iphones/${iphone}`} key={iphone}>{iphone}</Link>)}
            </div>
        )
    }
};

export default IPhones;