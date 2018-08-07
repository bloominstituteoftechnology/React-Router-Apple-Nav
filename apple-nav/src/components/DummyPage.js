import React from 'react';

const DummyPage = props => {
  return(
    <div>
      { props.content ?
        props.content :
        `This is the dummy page for ${props.match.params.nav}: ${props.match.params.subnav}`
      }
    </div>
  );
}

export default DummyPage;
