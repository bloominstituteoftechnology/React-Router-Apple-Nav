import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = props => {
  const navLinks = [
    {
      content: 'Mac',
      url    : '/mac'
    },
    {
      content: 'iPad',
      url    : '/ipad'
    },
    {
      content: 'iPhone',
      url    : 'iphone'
    },
    {
      content: 'Watch',
      url    : '/watch'
    },
    {
      content: 'TV',
      url    : '/tv'
    },
    {
      content: 'Music',
      url    : '/music'
    },
    {
      content: 'Support',
      url    : '/support'
    },
  ];
  
  return (
    <React.Fragment>
      <button>[APPLE]</button>
      
      <ul>
        
        {
          navLinks.map(link => {
            return (
              <Link key={ link.content } to={ link.url }>
                <li>{ link.content }</li>
              </Link>
            )
          })
        }
        
      </ul>

      <button>[SEARCH]</button>
      <button>[CHECKOUT]</button>
    </React.Fragment>
  );
};

export default TopNav;