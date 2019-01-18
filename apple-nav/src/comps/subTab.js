import React from 'react';

export const SubTab = props => {
  if (props.name === props.match.params.mainTab) {
    return <div>{props.match.params.mainTab}</div>;
  } else return null;
};
