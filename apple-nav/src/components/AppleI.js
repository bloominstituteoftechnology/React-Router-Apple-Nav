import React from 'react';
import { Link } from 'react-router-dom';

const AppleI = (props) => {
  return (
    <div>
        {props.ipads.map(ipad => <Link to={`/ipads/${ipad}`} key={ipad}>{ipad}</Link>)}
    </div>
  );
}

export default AppleI;