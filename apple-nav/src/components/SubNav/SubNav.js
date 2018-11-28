import React from "react";

import DummyData from "../../DummyData";

function SubNav(props) {
  const sub = props.match.params.name;
  const aData = DummyData.find(aData => `${aData.name}` === sub);
  return (
    <div>
      <img src="{aData.img}" alt="{aData.img}" className="apple-img" />
    </div>
  );
}

export default SubNav;
