import React from "react";

const Subnav = props => {
  return (
    <div className="submenu">
      {props.nav
        .find(nav => nav.subnav === props.match.params.subnav)
        .navitems.map(navitem => (
          <div className="subtext">{navitem.name}</div>
        ))}
    </div>
  );
};

export default Subnav;
