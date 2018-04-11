import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import macbook from './iCons/macbook_dark_large.svg';
import macbookair from './iCons/macbookair_dark_large.svg';
import macbookpro from './iCons/macbookpro_dark_large.svg';
import imac from './iCons/imac_dark_large.svg';
import imacpro from './iCons/imac_pro_dark_large.svg';
import macpro from './iCons/macpro_dark_large.svg';
import macmini from './iCons/macmini_dark_large.svg';
import accessories from './iCons/mac_acc_dark_large.svg';
import osx from './iCons/mac_osx_dark_large.svg';

const macProducts = [macbook, macbookair, macbookpro, imac, imacpro, macpro, macmini, accessories, osx];
const productTitles = ["MacBook", "MacBook Air", "MacBook Pro", "iMac", "iMac Pro", "Mac Pro", "Mac mini", "Accessories", "High Sierra"];

export const MACproducts = () => {
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
