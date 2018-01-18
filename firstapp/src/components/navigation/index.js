import React from 'react';
import { Link } from 'react-router-dom';

const navigation = [{
      title: "Mac",
      sub: [
        { title: "Macbook" },
        { title: "Macbook Air" },
        { title: "Macbook Pro" },
        { title: "iMac" },
        { title: "iMac Pro" },
        { title: "Mac pro" }, 
        { title: "Mac Mini" },
        { title: "Acessories" },
        { title: "High Sierra" }, 
        { title: "Compare" }
      ]
    }, 
    {
        title: 'iPad',
        sub: [
          { title: 'iPad Pro' },
          { title: 'iPad' },
          { title: 'iPad mini 4' },
          { title: 'iOS 11' },
          { title: 'Accessories' },
          { title: 'Compare' },
        ]
    }, 
    {
        title: 'iPhone',
        sub: [
          { title: 'iPhone X'},
          { title: 'iPhone 8'},
          { title: 'iPhone 7'},
          { title: 'iPhone 6s'},
          { title: 'iPhone SE'},
          { title: 'iOS 11'},
          { title: 'Accessories'},
          { title: 'Compare'},
        ]
    }
];

const MainNavigation = props => {
    const { path } = props;
    return (
        <nav>
            {
                navigation.map(item => <Link key={item.title} className="nav-item" to={`/${item.title}`}>{item.title}</Link>)
            }
        </nav>
    )
}
const SubNavigation = props => {
    const { path } = props;
    const nav = navigation.filter(item => item.title.toLowerCase() === path.toLowerCase().replace('/', ''));
    return nav.length ? (
        <nav>
            { nav[0].sub.map(item => <Link className="nav-item" to={`/${item.title}`}>{item.title}</Link>) }
        </nav>
    ) : null;
}
  export default props => {
    const { path } = props;
    return (
        <div className="navigation">
            <MainNavigation path={path} />
            <SubNavigation path={path} />
        </div>
    )
}