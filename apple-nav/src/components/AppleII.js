import React from 'react';
import { Link } from 'react-router-dom';

const AppleII = (props) => {
  return (
    <div>
        {props.iphones.map(iphone => <Link to={`/iphones/${iphone}`} key={iphone}>{iphone}</Link>)}
    </div>
  );
}

export default AppleII;