import React from 'react';
import { Link } from 'react-router-dom';

const AppleIII = (props) => {
  return (
    <div>
        {props.watchs.map(watch => <Link to={`/watchs/${watch}`} key={watch}>{watch}</Link>)}
    </div>
  );
}

export default AppleIII;