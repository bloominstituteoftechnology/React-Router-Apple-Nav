import React from "react";

const SubItem = props => {
  const subItemName = props.match.params.subItem.split("-").join(" ");
  const currentLocation = props.location.pathname.split("/")[1];
  let subItemObj = props.data.find(
    selected => selected.name === currentLocation
  );

  const realSubItem = subItemObj.subLinks.find(
    selected => selected.name === subItemName
  );
  console.log(realSubItem);
  //   console.log(realSubItem);
  //   console.log(currentLocation);

  return (
    <div>
      <img src={realSubItem.img} alt={realSubItem.name} />
    </div>
  );
};

export default SubItem;
