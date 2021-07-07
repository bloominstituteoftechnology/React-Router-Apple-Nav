import React from 'react';
import Sublink from './Sublink';
 
const Subtab = (props) => {
  const sublink = props.sublinks.find(tab => `${tab.id}` === props.match.params.id);
  return (
    <div className='sublinks'>
      {sublink.links.map(item => <Sublink link={item} />)}
    </div>
  )
}
 export default Subtab;