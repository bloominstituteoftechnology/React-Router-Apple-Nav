import React from "react";
import { TopNavnav, TopNavDiv, NavItemDiv } from "../StyledComponents/TopNavStyles";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <TopNavnav>
      <TopNavDiv>
        <Link to="/">
        <NavItemDiv><i id="apple" className="fab fa-apple" /></NavItemDiv>
        </Link>
        <Link to="/mac"><NavItemDiv>Mac</NavItemDiv></Link>
        <Link to="/ipad" textDecoration="none"><NavItemDiv>iPad</NavItemDiv></Link>
        <Link to="/iphone"><NavItemDiv>iPhone</NavItemDiv></Link>
        <Link to="/watch"><NavItemDiv>Watch</NavItemDiv></Link>
        <Link to="/tv"><NavItemDiv>TV</NavItemDiv></Link>
        <Link to="/music"><NavItemDiv>Music</NavItemDiv></Link>
        <Link to="/support"><NavItemDiv>Support</NavItemDiv></Link>
        <NavItemDiv><i className="fas fa-search"></i></NavItemDiv>
        <NavItemDiv><i className="fas fa-shopping-bag"></i></NavItemDiv>
      </TopNavDiv>
    </TopNavnav>
  );
};

export default TopNav;
