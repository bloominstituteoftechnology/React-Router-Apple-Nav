import React from 'react';
import Nav from './nav';
import {Link} from 'react-router-dom';

const Navwrapper = (props) => {
    return (
        <div className="navwrapper">
            <Link exact to='/'><button className="homebtn">Home</button></Link>
            {/* <Link  to='/'><button className="homebtn">Home</button></Link> */}
             {props.nav.map(nav => (<Nav nav={nav} />))}
        </div>
    )
}

export default Navwrapper;