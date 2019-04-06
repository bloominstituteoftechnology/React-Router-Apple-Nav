import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import SubItem from './SubItem';

const SubNav = props => {
  if (props) {
    console.log(props);
  } else {
    console.log('not ready');
  }
  return (
    <nav id="sub" className="sub-nav">
      {props.subNavData.length && props.subNavData.map(item => (
        <div>
          <Link to={`/Mac/${item.name}`} key={item.id}>
            {item.name}
          </Link>
          <SubItem subNav={item.subNav} />
        </div>
      ))}
    </nav>
  );
};

export default SubNav;
