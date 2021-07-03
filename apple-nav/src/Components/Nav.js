import React from 'react';
import { Link } from 'react-router-dom';



const Nav = (props) => {
    const data = props.data;

    return (
        <div>
            {props.data.map(category => 
         
                <Link to='/mac'  data={category} subData={category.subcategory}
                > {category.name} </Link>
      )}  
      </div>
            );
}
 
export default Nav;