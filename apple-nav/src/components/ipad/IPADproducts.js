import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import ipadpro from './iCons/ipadpro_light_large.svg';
import ipad from './iCons/ipad_large.svg';
import ipadmini from './iCons/ipadmini_large.svg';
import ios10 from './iCons/ipad_ios10_large.svg';
import accessories from './iCons/ipad_acc_large.svg';

const ipadProducts = [ipadpro, ipad, ipadmini, ios10, accessories];
const productTitles = ["iPad Pro", "iPad", "iPad mini", "iOS 11", "Accessories"];

export const IPADproducts = () => {
  return (
    <Nav className="productOptions ipadProducts">
      {ipadProducts.map((product, index) => (
        <NavItem key={product}>
          <NavLink href="#">
            <img src={product} alt="temp" />
            <div className="productName ipad">{productTitles[index]}</div>
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  )
}
