import React from 'react';

const SubItemPage = props => {
  let items = [];
  props.link.map(linkObj => (
    linkObj.subLinks.map(subLink => (
      items.push(subLink)
    ))
  ));
  const item =  items.find(thing => `${thing.name}` === props.match.params.subName);
  const parent = props.link.find(thing => `${thing.name}` === props.match.params.name);
  let parentName = '';
  parentName = parent.name;
  let dark = ( parentName === 'Mac' || parentName === 'TV');
  let classes = 'sub-item-page ';
  if (!dark) {
  classes += 'light'
}

  return(
    <div className={classes}>
      <h2>{item.name}</h2>
      <img src={item.img} alt={item.name} />

    </div>
  )
}

export default SubItemPage;
