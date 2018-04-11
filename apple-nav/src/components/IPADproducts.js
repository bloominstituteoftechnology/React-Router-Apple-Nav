import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import ipadpro from '../ipad-icons/ipadpro_light_large.svg';
import ipad from '../ipad-icons/ipad_large.svg';
import ipadmini from '../ipad-icons/ipadmini_large.svg';
import ios10 from '../ipad-icons/ipad_ios10_large.svg';
import accessories from '../ipad-icons/ipad_acc_large.svg';

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
