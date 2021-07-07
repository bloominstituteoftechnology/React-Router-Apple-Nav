import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Watch extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                {this.props.watches.map(watch => <Link to={`/watches/${watch}`} key={watch}>{watch}</Link>)}
                {/* {this.props.macs.map(mac => <Link to={`/macs/${mac}`} key={mac}>{mac}</Link>)} */}
            </div>
        )
    }
};

export default Watch;