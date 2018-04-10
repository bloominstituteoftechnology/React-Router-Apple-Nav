import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import macbook from '../AppleIcons/macbook_dark_large.svg';
import macbookair from '../AppleIcons/macbookair_dark_large.svg';
import macbookpro from '../AppleIcons/macbookpro_dark_large.svg';
import imac from '../AppleIcons/imac_dark_large.svg';
import imacpro from '../AppleIcons/imac_pro_dark_large.svg';
import macpro from '../AppleIcons/macpro_dark_large.svg';
import macmini from '../AppleIcons/macmini_dark_large.svg';
import accessories from '../AppleIcons/mac_acc_dark_large.svg';
import osx from '../AppleIcons/mac_osx_dark_large.svg'


export const Products = () => {
  return (
    <Nav className="productOptions">
      <NavItem>
        <NavLink className="product">
          <img src={macbook} />
          <div className="productName">Macbook</div>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="product">
          <img src={macbookair} />
          <div className="productName">Macbook</div>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="product">
          <img src={macbookpro} />
          <div className="productName">Macbook</div>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="product">
          <img src={imac} />
          <div className="productName">Macbook</div>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="product">
          <img src={imacpro} />
          <div className="productName">Macbook</div>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="product">
          <img src={macpro} />
          <div className="productName">Macbook</div>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="product">
          <img src={macmini} />
          <div className="productName">Macbook</div>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="product">
          <img src={accessories} />
          <div className="productName">Macbook</div>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="product">
          <img src={osx} />
          <div className="productName">Macbook</div>
        </NavLink>
      </NavItem>
    </Nav>
  )
}
