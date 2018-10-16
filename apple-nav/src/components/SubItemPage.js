import React from 'react';

const SubItemPage = props => {
  console.log('subpage');
  let items = [];
  props.link.map(linkObj => (
    linkObj.subLinks.map(subLink => (
      items.push(subLink)
    ))
  ));
  console.log(items);
  const item =  items.find(thing => `${thing.name}` === props.match.params.subName);
  console.log(props.match.params.subName);
  console.log(item)


  return(
    <div className='sub-item-page'>
      <h2>Sup</h2>
      <img src={item.img} alt={item.name} />
      <p>{item.name}</p>
    </div>
  )
}

export default SubItemPage;
