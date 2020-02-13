import React from 'react';
import accesories from './img/ipad/accesories.png';
import SubNav from './SubNav';

const Nav = (props) => {
    return(
        <div>
            <h1>I am the {props.tab}</h1>
            <img src={accesories} alt='accesories' />
            {props.ipad.map(item=>(
                <SubNav image={item} />
            ))}
            
        </div>
    )
}

export default Nav;


// 