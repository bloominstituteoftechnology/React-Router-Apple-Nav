import React from 'react';
import ProductCard from './ProductCard';
import iphonex from '../images/iphonex.png';
import ipad from '../images/ipad.jpg';
import mcbook from '../images/mcbook.jpg';

const Home = () => {
	return(
<div>
<ProductCard title="iPhone X" subText="Say goodbye to your phone, because this one will break." image={iphonex} info="/phone/" />
<ProductCard tall={true} title="i paid" subText="way too much for a sub-par product." image={ipad} info="/iPad/" />
<ProductCard tall={true} title="McBook" subText="I'm lovin' it!" image={mcbook} info="/McDonalds/" />
</div>
);
}

export default Home;