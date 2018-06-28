import React from 'react';
import '../App.css';
import navLinks from '../data';

const SubNav = props => {
  const topLink = navLinks.find(x => x.name === props.match.params.name);
  return (
    <div class="subnav-container-container">
      <div class="subnav-container">
        {topLink.subNav.map(item => (
          <div className="icon-name-container" key={Math.random()}>
            <img src={item.icon} alt="An Apple product."/>
            <div>{item.name}</div>
          </div>
        ))}
    </div>
    </div>
  );
}

export default SubNav;
