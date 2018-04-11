import React from 'react';
import './SubNav.css';
import {Link} from 'react-router-dom';
import PageData from '../../Data/PageData';
const SubNav = (props) => {
  if (PageData[props.match.params.name] !== undefined){
    return(
      <div className='navContainer padding-horizontal'>
        {PageData[props.match.params.name].subNav.map((item, i) => <Link key={item + i} className='navItem' to={`/pages/${item}`}>{item}</Link>)}
      </div>
    );
  } else {
    return null;
  }
}
export default SubNav;
