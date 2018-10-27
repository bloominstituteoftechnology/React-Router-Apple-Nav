import React from 'react';
import accesories from './img/ipad/accesories.png';
import accesories from './img/ipad/accesories.png';
import accesories from './img/ipad/accesories.png';
import accesories from './img/ipad/accesories.png';
import accesories from './img/ipad/accesories.png';


const SubNav = (props) => {
    console.log(props.image)
    return(
        <div>
            <img src='{props.image}'/>
        </div>
    )
}

export default SubNav;