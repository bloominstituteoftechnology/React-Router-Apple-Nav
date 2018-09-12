import React from 'react';
import './ApplePie.css';
import mctoy from '../images/mctoy.jpg';
import { Link } from 'react-router-dom';

const ApplePie = () => {
return (
<div className="McBook">
<div className="seventy">

 <div className="header">
 <div className="sub">McBook pro</div>
 <Link className="button" to="/store/">Buy</Link>
 </div>
 
 <div className="heading">
 McBook, apple flavor
 </div>
 <div className="text">
 <div>Now for just $1.99</div>
 <div>Available in McDonalds in the USA and Canada</div>
 <div>Comes with all new McToy!</div>
 </div>
 <img src={mctoy} alt="mcdonald's playset" />
 
</div>
</div>
);
}

export default ApplePie;