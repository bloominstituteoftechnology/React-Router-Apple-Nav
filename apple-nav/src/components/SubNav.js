import React from 'react';
import { Link } from 'react-router-dom';

const navigation = [
    {
        title: "Mac",
        sub: ["Macbook", "Macbook Air","Macbook Pro","iMac","iMac Pro","Mac Mini","Accessories","High Sierra","Compare"]
    },
    {
        title: "iPad",
        sub: ["iPad Pro", "iPad","iPad Mini 4","iOS 11","Accessories","Mac Mini","Compare"]
    },
    {
        title: "iPhone",
        sub: ["iPhone X", "iPhone 8","iPhone 7","iPhone 6s","iPhone SE","iOS 11", "Accessories", "Compare"]
    },
    {
        title: "Watch",
        sub: ["Macbook", "Macbook Air","Macbook Pro","iMac","iMac Pro","Mac Mini","Accessories","High Sierra","Compare"]
    },
    {
        title: "TV",
        sub: ["Macbook", "Macbook Air","Macbook Pro","iMac","iMac Pro","Mac Mini","Accessories","High Sierra","Compare"]
    },
    {
        title: "Music",
        sub: ["Macbook", "Macbook Air","Macbook Pro","iMac","iMac Pro","Mac Mini","Accessories","High Sierra","Compare"]
    },
    {
        title: "Support",
        sub: ["Macbook", "Macbook Air","Macbook Pro","iMac","iMac Pro","Mac Mini","Accessories","High Sierra","Compare"]
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