import React from 'react';
import './NavBar.css';
import SubNav from './SubNav';
import { Link, Route } from 'react-router-dom';

const NavBar = props => {
  // console.log(props.data[2].name); // Why doesn't this work?
  return (
    <nav id="nav" className="main-nav">
      {props.data.map(item => (
        <div key={item.name}>
          <Link to={`/${item.name}`} key={item.id}>
            {item.name}
          </Link>
          <Route
            path={`/${item.name}`}
            render={props => ( !item.subNav ? null :
              <SubNav {...props} subNavData={item.subNav} />
            )}
          />
        </div>
      ))}
    </nav>
  );
};

export default NavBar;
