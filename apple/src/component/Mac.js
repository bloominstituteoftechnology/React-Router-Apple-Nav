import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import "./Mac.css";

import iMacSvg from "../AppleIcons/imac_dark_large.svg";
import iMacProSvg from "../AppleIcons/imac_pro_dark_large.svg";
import AccSvg from "../AppleIcons/mac_acc_dark_large.svg";
import CompSvg from "../AppleIcons/mac_comp_dark_large.svg";
import OsxSvg from "../AppleIcons/mac_osx_dark_large.svg";
import MacBookSvg from "../AppleIcons/macbook_dark_large.svg";
import MacBookAirSvg from "../AppleIcons/macbookair_dark_large.svg";
import MacBookProSvg from "../AppleIcons/macbookpro_dark_large.svg";
import MacMiniSvg from "../AppleIcons/macmini_dark_large.svg";
import MacProSvg from "../AppleIcons/macpro_dark_large.svg";

const Mac = () => {
  return (
    <div>
      <Nav className="subNavBar">
        <NavItem>
          <NavLink className="NavStyle" href="/Mac">
            <img className="subMenuIcons" src={MacBookSvg} />
            <p className="pStyle">MacBook</p>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink className="NavStyle" href="/Mac">
            <img className="subMenuIcons" src={MacBookAirSvg} />
            <p className="pStyle">MacBook Air</p>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink className="NavStyle" href="/Mac">
            <img className="subMenuIcons" src={MacBookProSvg} />
            <p className="pStyle">MacBook Pro</p>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink className="NavStyle" href="/Mac">
            <img className="subMenuIcons" src={iMacSvg} />
            <p className="pStyle">iMac</p>
          </NavLink>
        </NavItem>

        <NavItem className="New">
          <NavLink className="NavStyle" href="/Mac">
            <img className="subMenuIcons" src={iMacProSvg} />
            <p className="pStyle">iMac Pro</p>
            <p className="pStyle-orange">New</p>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink className="NavStyle" href="/Mac">
            <img className="subMenuIcons" src={MacProSvg} />
            <p className="pStyle">Mac Pro</p>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink className="NavStyle" href="/Mac">
            <img className="subMenuIcons" src={MacMiniSvg} />
            <p className="pStyle">Mac mini</p>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink className="NavStyle" href="/Mac">
            <img className="subMenuIcons" src={AccSvg} />
            <p className="pStyle">Accessories</p>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink className="NavStyle" href="/Mac">
            <img className="subMenuIcons" src={OsxSvg} />
            <p className="pStyle">High Sierra</p>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink className="NavStyle" href="/Mac">
            <img className="subMenuIcons" src={CompSvg} />
            <p className="pStyle">Compare</p>
          </NavLink>
        </NavItem>
      </Nav>
      <div className="MacContainer">
        <h2 className="Mach1">Macintosh.</h2>
        <h1 className="Mach2">Your best friend.</h1>
        <img
          className="MacImage"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/IMac_vector.svg/2000px-IMac_vector.svg.png"
        />
      </div>
    </div>
  );
};

export default Mac;
