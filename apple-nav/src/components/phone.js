import React from 'react';
import './phone.css';
import broked from '../images/broked.jpg';

const Phone = () => {
return (
<div className="broked">
<div className="tiltLeft">
This page is as broken
</div>
<div className="tiltRight">
as your phone will be when you drop it
</div>
<img src={broked} alt="" />
</div>
);
}

export default Phone;