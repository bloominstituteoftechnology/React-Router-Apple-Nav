import React from 'react';
import { navData } from '../navData';


const ItemPage = props => {
  const item =  navData.find(thing => `${thing.name}` === props.match.params.name);
  return(
    <div className='item-wrapper'>
    <h1>{item.name}</h1>
    {/* <img src={item.img} alt={item.name} /> */}
    <h2>Yeah, it's pretty cool. Super expensive, though.</h2>
  </div>
  )
}

export default ItemPage;
