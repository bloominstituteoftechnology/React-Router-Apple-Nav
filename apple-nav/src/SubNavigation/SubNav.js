import React from 'react';

const SubNav = props => {
  return(
    <>
    <img src={props.subnav.img} />
    {props.subnav.subname}
    {' '}
    {props.subnav.new ? `${props.subnav.new}` : null}
    </>
  );
}

export default SubNav;
