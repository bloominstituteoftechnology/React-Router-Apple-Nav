import React from 'react';
import SubNav from '../SubNav';

const iphoneLinks = [
    {name: 'iPhone X', url: '/iphone-x', img: 'https://www.apple.com/v/iphone/home/x/images/chapternav/iphonex_large.svg'},
    {name: 'iPhone 8', url: '/iphone-8', img: 'https://www.apple.com/v/iphone/home/x/images/chapternav/iphone8_large.svg'},
    {name: 'iPhone 7', url: '/iphone-7', img: 'https://www.apple.com/v/iphone/home/x/images/chapternav/iphone7_large.svg'},
    {name: 'iPhone 6s', url: '/iphone-6s', img: 'https://www.apple.com/v/iphone/home/x/images/chapternav/iphone6s_large.svg'},
    {name: 'iPhone SE', url: '/iphone-se', img: 'https://www.apple.com/v/iphone/home/x/images/chapternav/iphonese_large.svg'},
    {name: 'iOS 11', url: '/ios11', img: 'https://www.apple.com/v/iphone/home/x/images/chapternav/iphone_ios_large.svg'},
    {name: 'Accessories', url: '/iphone-accessories', img: 'https://www.apple.com/v/iphone/home/x/images/chapternav/iphone_acc_large.svg'},
    {name: 'Compare', url: '/iphone-compare', img: 'https://www.apple.com/v/iphone/home/x/images/chapternav/iphone_comp_large.svg'}
]

const iPhone = (props) => {
    return (
        <div className="sub-header">
            <SubNav list={iphoneLinks} width={'60vw'} />
            <h1>iPhone</h1>
            <img src="img/iphone.png" alt="" />
        </div>
    )
}

export default iPhone;