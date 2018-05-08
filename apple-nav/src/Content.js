import React from 'react';

const Content = (props) => {
  return(
    <div>
      {props.match.params.id}{props.match.params.contentId}
    </div>
  );
}

export default Content;
