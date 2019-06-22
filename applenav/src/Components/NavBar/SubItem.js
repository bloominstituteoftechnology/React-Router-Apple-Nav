import React from 'react';

const SubItem = props => {
  console.log(props);
  return (
    <div>
      {props.subNav && props.subNav.map(sub => (
        <p>{sub.name}</p>
        ))}
    </div>
  )
}

export default SubItem;
