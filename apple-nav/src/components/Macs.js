import React from 'react';
import { Link } from 'react-router-dom';

const Macs = (props) => {
console.log(props.macs);
  return (
    <div>
        {props.macs.map(mac => <Link to={`/macs/${mac}`} key={mac}>{mac}</Link>)}
    </div>
  );
}
 
export default Macs;