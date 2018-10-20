import React from "react";
import SubNav from './SubNav';

const Nav = props => {
    let subNav = props.navs.find(nav => nav.subnav === props.match.params.product);
  return (
    <div className="nav">
      {subNav.navitems.map(item => <SubNav item={item} />)}
    </div>
  );
};
export default Nav;