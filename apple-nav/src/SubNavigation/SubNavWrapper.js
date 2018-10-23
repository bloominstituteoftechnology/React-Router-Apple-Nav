import React from 'react';
import SubNav from './SubNav';

const SubNavWrapper = props => {
  return (
    <div className="subnav-container">
      {props.subnav.map(subnav => <SubNav subnav={subnav} />)}
    </div>
  );
}

export default SubNavWrapper;


// {props.subnav.map(subnav => (
//   <Route path="/:nav"
//       render={props => (
//             <SubNav {...props} subnav={subnav} />
//       )} />
//       ))}
