import React from 'react';
import './NavBar.css';
import { Link, Route } from 'react-router-dom';
import SubNavContent from '../../Components/SubNavContent/SubNavContent';

const SubNav = props => {
  const activeItem = props.subNavData.find(item => props.match.params.id === item.name);

  return (
    <div>
      <nav id="sub" className="sub-nav">
        {activeItem.subNav && activeItem.subNav.map(subItem => (
          <Link to={`/${subItem.name}`} key={subItem.name} >
            {subItem.name}
          </Link>
        ))}
      </nav>
      <Route
        path={`/${props.match.params.id}/:id`}
        render={props => <SubNavContent /> }
      />
    </div>
  );
};

export default SubNav;
