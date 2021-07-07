import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class TV extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                {this.props.tvs.map(tv => <Link to={`/tvs/${tv}`} key={tv}>{tv}</Link>)}
            {/* {this.props.macs.map(mac => <Link to={`/macs/${mac}`} key={mac}>{mac}</Link>)} */}
            </div>
        )
    }
};

export default TV;