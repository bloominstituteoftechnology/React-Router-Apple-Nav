import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Macs extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                {this.props.macs.map(mac => <Link to={`/macs/${mac}`} key={mac}>{mac}</Link>)}
            </div>
        )
    }
};

export default Macs;