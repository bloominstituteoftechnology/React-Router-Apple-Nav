import React from 'react';
import eyepad from '../images/eyepad.jpg';
import './EyePad.css';
import { Link } from 'react-router-dom';

const EyePad = () => {
return(
<div className="cover">
 <div className="header">
 <div className="sub">iPad</div>
 <Link className="button" to="/store/">Buy</Link>
 </div>
 <img className="mTop" src={eyepad} alt="" />
</div>
);
}

export default EyePad