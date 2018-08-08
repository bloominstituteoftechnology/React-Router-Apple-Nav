import React from 'react';
import SubNav from '../SubNav';

const macLinks = [
    {name: 'MacBook', url: '/macbook', img: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbook_large.svg'},
    {name: 'MacBook Air', url: '/macbook-air', img: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbookair_large.svg'},
    {name: 'MacBook Pro', url: '/macbook-pro', img: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbookpro_large.svg'},
    {name: 'iMac', url: '/imac', img: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/imac_large.svg'},
    {name: 'iMac Pro', url: '/imac-pro', img: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/imac_pro_large.svg'},
    {name: 'Mac Pro', url: '/mac-pro', img: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macpro_large.svg'},
    {name: 'Mac mini', url: '/mac-mini', img: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macmini_large.svg'},
    {name: 'Accessories', url: '/mac-accessories', img: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/mac_acc_large.svg'},
    {name: 'High Sierra', url: '/high-sierra', img: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/mac_osx_large.svg'},
    {name: 'Compare', url: '/mac-compare', img: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/mac_comp_large.svg'}
]

const Mac = (props) => {
    return (
        <div className="sub-header">
            <SubNav list={macLinks} width={'70vw'} />
            <h1>Mac</h1>
            <img src="/img/mac.png" alt=""/>
        </div>
    )
}

export default Mac;