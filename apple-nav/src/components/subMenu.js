import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function subMenu(props) {
    const currentProd = props.sub.find(sl => `${sl.name}` === props.match.params.id );
    // const currentProd = [];

    return (
        <div className='subItems' >
            {/* {currentProd = props.sub.find(sl => `${sl.name}` === props.match.params.id )} */}
            {currentProd === 'undefined' ? null : currentProd.subLinks.map(sub => (
                <Link key={sub.img} to={`/${sub.name}`} >
                    <div className='subMenuNav'>
                        <div ><img src={sub.img} alt='product'/></div>
                        <div>{sub.name}</div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default subMenu;