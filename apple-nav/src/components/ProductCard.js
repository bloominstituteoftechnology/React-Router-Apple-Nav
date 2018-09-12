import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';

const ProductCard = (params) =>{
	if(params.tall===true){
return(
<div className="productCard">
<div className="title">
{params.title}
</div>
<div className="subText">
{params.subText}
</div>
<div className="flex">
<Link to={params.info}>Learn More ></Link><Link to="/store">Buy ></Link>
</div>
<img className="tall" src={params.image} alt="broken" />
</div>
	);}
return(
<div className="productCard">
<div className="title">
{params.title}
</div>
<div className="subText">
{params.subText}
</div>
<div className="flex">
<Link to={params.info}>Learn More ></Link><Link to="/store">Buy ></Link>
</div>
<img src={params.image} alt="broken" />
</div>
);}

export default ProductCard;