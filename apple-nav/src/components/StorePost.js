import React from 'react';
import './StorePost.css';

const StorePost = (params) =>{
return(
<div className="overAll">
<div className="item">
<div>
<div className="title">
{params.name}
</div>
<div className="image">
<img src={params.img} alt="none given!" />
</div>
</div>
<div>
<div className="price">
price: {params.price}
</div>
<div className="add">
Add to cart
</div>
</div>
</div>
</div>
);
}

export default StorePost;