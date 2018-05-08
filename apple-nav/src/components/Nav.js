import React from 'react';
import {Link} from 'react-router-dom';

const Nav = (props) => {
    return(
        <div>
            {props.macs.map(mac => <Link to={`/macs/${mac.toLocaleLowerCase()}`} key={mac}>{mac}</Link>)}
        </div>
    )
};

export default Nav;