import React from 'react';
import { Link } from 'react-router-dom';

const navigation = [{
    title: "Mac",
    sub: ["Macbook", "Macbook Air","Macbook Pro","iMac","iMac Pro","Mac Mini","Accessories","High Sierra","Compare"]
// ,
// {
//     title: 'iPad',
//     sub: [
//         { title: 'iPad Pro' },
//         { title: 'iPad' },
//         { title: 'iPad Mini 4' },
//         { title: 'iOS 11' },
//         { title: 'Accessories' },
//         { title: 'Compare' }
//     ]
// }, 
// {
//     title: 'iPhone',
//     sub: [
//         {title: 'iPhone X'},
//         {title: 'iPhone 8'},
//         {title: 'iPhone 7'},
//         {title: 'iPhone 6s'},
//         {title: 'iPhone SE'},
//         { title: 'iOS 11' },
//         { title: 'Accessories' },
//         { title: 'Compare' }
//     ]
}
];

const SubNav = props => {
    const { path } = props;
    console.log(navigation);
    const nav = navigation.filter((item) => {
        console.log(item); 
        return item.title.toLowerCase() === props.match.params.product.toLowerCase()
    })
    console.log(nav);
    console.log()
    return nav.length ? (
        <nav>
            { nav[0].sub.map(item => <Link to={`/${item}`}>{item}</Link>) }
        </nav>
    ) : null;
}

export default SubNav;