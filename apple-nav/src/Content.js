import React from 'react';

const Content = (props) => {
  return(
    <div>
      All about {props.menuData[props.match.params.id].items[props.match.params.contentId]}: 
    </div>
  );
}

export default Content;
