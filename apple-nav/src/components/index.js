import React from 'react';
import { Link } from 'react-router-dom';

const navigation = [{
    title: "Mac",
    sub: [
        {
            title: "Macbook"
        },
        {
            title: "Macbook Air"
        },
        {
            title: "Macbook Pro"
        },
        {
            title: "iMac"
        },
        {
            title: "iMac Pro"
        },
        {
            title: "Mac Mini"
        },
        {
            title: "Accessories"
        },
        {
            title: "High Sierra"
        },
        {
            title: "Compare"
        }
    ]
},
{
    title: 'iPad',
    sub: [
        { title: 'iPad Pro' },
        { title: 'iPad' },
        { title: 'iPad Mini 4' },
        { title: 'iOS 11' },
        { title: 'Accessories' },
        { title: 'Compare' }
    ]
}, 
{
    title: 'iPhone',
    sub: [
        {title: 'iPhone X'},
        {title: 'iPhone 8'},
        {title: 'iPhone 7'},
        {title: 'iPhone 6s'},
        {title: 'iPhone SE'},
        { title: 'iOS 11' },
        { title: 'Accessories' },
        { title: 'Compare' }
    ]
}];

const MainNav = props => {
    const { path } = props;
    return (
        <nav>
            {
                navigation.map(item => <Link key={item.title} to={`/${item.title}`}> {item.title} </Link>)
            }
        </nav>
    )
}

export default props => {
    const { path } = props;
    return (
        <div>
            <MainNav path={path}/>
        </div>
    )
}