import React from "react";

const SubNav = props => {
  return (
    <div className="sub-menu">
      {props.nav
        .find(nav => nav.subnav === props.match.params.subnav)
        .navitems.map(navitem => (
          <div className="subtext">{navitem.name}</div>
        ))}
    </div>
  );
};

export default SubNav;
