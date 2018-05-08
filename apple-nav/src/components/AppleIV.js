import React from 'react';
import { Link } from 'react-router-dom';

const AppleIV = (props) => {
  return (
    <div>
        {props.tvs.map(tv => <Link to={`/tvs/${tv}`} key={tv}>{tv}</Link>)}
    </div>
  );
}

export default AppleIV;