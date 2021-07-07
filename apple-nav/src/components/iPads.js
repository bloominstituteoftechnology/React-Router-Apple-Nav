import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class IPads extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                {this.props.ipads.map(ipad => <Link to={`/ipads/${ipad}`} key={ipad}>{ipad}</Link>)}
            </div>
        )
    }
};

export default IPads;