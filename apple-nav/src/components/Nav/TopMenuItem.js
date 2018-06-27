import React from 'react';
import {Route, Link} from 'react-router-dom';
import SubCategory from './SubCategory';



const TopMenuItem = (props) => {
    
    return (
    <div>
          <Link to={`/products/${props.item}`}> {props.item} </Link>
      
        
       </div>     
    )};
export default TopMenuItem;