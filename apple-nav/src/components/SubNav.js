import React from 'react';
import './SubNav.css';

const SubNav = ({ data, light }) => {
  return (
    <nav className={light ? 'SubNav light' : 'SubNav'}>
      <div className="SubNav-Wrapper">
        {data.map(product => (
          <a href="/" className="SubNavItem" key={product.name}>
            <img src={product.img} alt={product.name} />
            <span className="SubNav-Text">{product.name}</span>
            <span
              className="New"
              style={!product.new ? { visibility: 'hidden' } : null}
            >
              New
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default SubNav;
