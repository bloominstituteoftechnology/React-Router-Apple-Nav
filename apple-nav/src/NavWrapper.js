import React from 'react';
import Nav from './Nav';
import {Route} from 'react-router-dom';

const NavWrapper = (props) => {
    return(
        <div>
            {/* <h1>{props.tabs}</h1> */}

            {/* {props.tabs.map(item=> (
                <Route path='/item' render={(props)=> <Nav {...props} item={item} />} />
            ))} */}

            {props.tabs.map(item => (
                <Nav tab={item} ipad={props.ipad} />
            ))}

        </div>
    )
}

export default NavWrapper;