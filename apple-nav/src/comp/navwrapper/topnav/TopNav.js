import React from 'react';

const TopNav = props => {
  return (
    <React.Fragment>
      <button>[APPLE]</button>
      
      <ul>
        <li>Mac</li>
        <li>iPad</li>
        <li>iPhone</li>
        <li>Watch</li>
        <li>TV</li>
        <li>Music</li>
        <li>Support</li>
      </ul>

      <button>[SEARCH]</button>
      <button>[CHECKOUT]</button>
    </React.Fragment>
  );
};

export default TopNav;