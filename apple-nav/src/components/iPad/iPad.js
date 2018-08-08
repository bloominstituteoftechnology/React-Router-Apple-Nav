import React from 'react';
import SubNav from '../SubNav';

const ipadLinks = [
    {name: 'iPad Pro', url: '/ipad-pro', img: 'https://www.apple.com/v/ipad/home/ah/images/home/familybrowser/ipadpro_light_large.svg'},
    {name: 'iPad', url: '/ipad-9.7', img: 'https://www.apple.com/v/ipad/home/ah/images/home/familybrowser/ipad_large.svg'},
    {name: 'iPad mini 4', url: '/ipad-mini-4', img: 'https://www.apple.com/v/ipad/home/ah/images/home/familybrowser/ipadmini_large.svg'},
    {name: 'iOS 11', url: '/ios11', img: 'https://www.apple.com/v/ipad/home/ah/images/home/familybrowser/ipad_ios10_large.svg'},
    {name: 'Accessories', url: '/ipad-accessories', img: 'https://www.apple.com/v/ipad/home/ah/images/home/familybrowser/ipad_acc_large.svg'},
    {name: 'Compare', url: '/ipad-compare', img: 'https://www.apple.com/v/ipad/home/ah/images/home/familybrowser/ipad_comp_large.svg'}
]

const iPad = (props) => {
    return (
        <div className="sub-header">
            <SubNav list={ipadLinks} width={'50vw'} />
            <img src="/img/ipad.png" alt=""/>
        </div>
    )
}

export default iPad;