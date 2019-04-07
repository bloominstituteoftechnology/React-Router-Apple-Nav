import React from 'react';
import './NavBar.css';
import SubNav from './SubNav';
import { Link, Route } from 'react-router-dom';

const NavBar = props => {
  const propData = props.data;
  console.log(props.match.params.id); 
  return (
    <div>
      <nav id="nav" className="main-nav">
        {propData.map(item => (
          <div key={item.name}>
            <Link to={`/${item.name}`} key={item.id}>
              {item.name}
            </Link>
          </div>
        ))}
      </nav>
      
      {props.data.length && <Route
        exact path={`/:id`}
        render={props => <SubNav {...props} subNavData={propData} /> }
      />}
    </div>
  );
};

export default NavBar;
