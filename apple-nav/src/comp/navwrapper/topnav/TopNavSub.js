import React from 'react';

const TopNavSub = props => {
  const subNavLinks = {
      mac: [ 'MacBook', 'MacBook Air', 'MacBook Pro', 'iMac', 'iMac Pro', 'Mac Pro', 'Mac Mini', 'Accessories', 'High Sierra', 'Compare' ],
      ipad: [ 'iPad Pro', 'iPad', 'iPad Mini 4', 'iOS 11', 'Accessories', 'Compare' ],
      iphone: [ 'iPhone X', 'iPhone 8', 'iPhone 7', 'iPhone 6s', 'iPhone SE', 'iOS 11', 'Accessories', 'Compare' ],
      watch: [ 'Apple Watch 3', 'Apple Watch Nike+', 'Apple Watch Hermes', 'Apple Watch Edition', 'Apple Watch 1', 'Watch OS', 'Bands', 'Accessories', 'Compare' ],
      tv: [ 'Apple TV 4k', 'Apple TV', 'TV App', 'Accessories', 'Compare' ],
      music: [ 'Apple Music', 'iTunes', 'HomePod', 'iPod Touch', 'Music Accessories', 'Gift Cards' ],
      support: [ 'Apple doesn\'t support anything older than iOS11' ]
    };

  const { product } = props.match.params;
  const getProduct = Object.keys(subNavLinks).filter(subNavLinksKey => subNavLinksKey === product);

  return (
   <ul>

    {
      subNavLinks[getProduct].map(product => {
        return (
          <li key={ product }>{ product }</li>
        )
      })
    }
     
   </ul>
  )
};

export default TopNavSub;