import React from 'react';
import StorePost from './StorePost.js';
import lamp from '../images/lamp.jpg';
import toaster from '../images/toasty.jpg';
import idog from '../images/idog.jpg';
import capn from '../images/iayeaye.jpg';
import pine from '../images/underthesea.jpg';

const Store = () => {
return (
<div className="color">
<StorePost img={capn} price="you have to sing with it" name="i i cap'n" />
<StorePost img={pine} price="32 dollars under the sea" name="i 'napple" />
<StorePost img={idog} price="$199.99" name="seeing i dog" />
<StorePost img={lamp} price="like 30 bucks?" name="i lamp" />
<StorePost img={toaster} price="$69.99" name="MacBook Pro" />
</div>
);
}

export default Store;