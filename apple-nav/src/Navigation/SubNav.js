import React from 'react';

const SubNav = props => {
  return(
    <>
    {/* todo: map this into a new component */}
    {props.subnav.map(subnav => subnav.subname)}
    </>
  );
}

export default SubNav;
