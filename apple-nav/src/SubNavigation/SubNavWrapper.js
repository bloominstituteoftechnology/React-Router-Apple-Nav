import React from 'react';
import SubNav from './SubNav';

const SubNavWrapper = props => {
  return (
    <>
      {props.subnav.map(subnav => <SubNav subnav={subnav} />)}
    </>
  );
}

export default SubNavWrapper;


// {props.subnav.map(subnav => (
//   <Route path="/:nav"
//       render={props => (
//             <SubNav {...props} subnav={subnav} />
//       )} />
//       ))}
