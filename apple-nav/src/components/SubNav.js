import React from 'react';
import './SubNav.css';

const SubNav = props => {
  return (
    <nav className="SubNav">
      <div className="SubNav-Wrapper">
        <a href="/" className="SubNavItem">
          <img src="img/macbook_dark_large.svg" alt="Macbook" />
          <span className="SubNav-Text">MacBook</span>
        </a>
        <a href="/" className="SubNavItem">
          <img src="img/macbookair_dark_large.svg" alt="Macbook Air" />
          <span className="SubNav-Text">MacBook Air</span>
        </a>
        <a href="/" className="SubNavItem">
          <img src="img/macbookpro_dark_large.svg" alt="Macbook Pro" />
          <span className="SubNav-Text">MacBook Pro</span>
          <span className="New">New</span>
        </a>
        <a href="/" className="SubNavItem">
          <img src="img/imac_dark_large.svg" alt="Macbook Pro" />
          <span className="SubNav-Text">iMac</span>
        </a>
        <a href="/" className="SubNavItem">
          <img src="img/imac_pro_dark_large.svg" alt="Macbook Pro" />
          <span className="SubNav-Text">iMac Pro</span>
        </a>
        <a href="/" className="SubNavItem">
          <img src="img/macpro_dark_large.svg" alt="Macbook Pro" />
          <span className="SubNav-Text">Mac Pro</span>
        </a>
        <a href="/" className="SubNavItem">
          <img src="img/macmini_dark_large.svg" alt="Macbook Pro" />
          <span className="SubNav-Text">Mac Mini</span>
        </a>
        <a href="/" className="SubNavItem">
          <img src="img/mac_acc_dark_large.svg" alt="Macbook Pro" />
          <span className="SubNav-Text">Accessories</span>
        </a>
        <a href="/" className="SubNavItem">
          <img src="img/mac_osx_dark_large.svg" alt="Macbook Pro" />
          <span className="SubNav-Text">Mojave</span>
        </a>
        <a href="/" className="SubNavItem">
          <img src="img/mac_comp_dark_large.svg" alt="Macbook Pro" />
          <span className="SubNav-Text">Compare</span>
        </a>
      </div>
    </nav>
  );
};

export default SubNav;
