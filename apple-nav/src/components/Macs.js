import React from 'react';
import { Link } from 'react-router-dom';

const Macs = (props) => {
  return (
    <div>
        {props.macs.map(mac => <Link to={`/macs/${mac}`} key={mac}>{mac}</Link>)}
    </div>
  );
}
 
export default Macs;