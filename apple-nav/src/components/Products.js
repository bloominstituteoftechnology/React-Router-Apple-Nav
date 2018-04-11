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
import osx from '../AppleIcons/mac_osx_dark_large.svg';

const macProducts = [macbook, macbookair, macbookpro, imac, imacpro, macpro, macmini, accessories, osx];
const productTitles = ["MacBook", "MacBook Air", "MacBook Pro", "iMac", "iMac Pro", "Mac Pro", "Mac mini", "Accessories", "High Sierra"];

export const Products = () => {
  return (
    <Nav className="productOptions">
      {macProducts.map((product, index) => (
        <NavItem key={product} className="product">
          <NavLink href="#">
            <img src={product} alt="temp" />
            <div className="productName">{productTitles[index]}</div>
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  )
}
