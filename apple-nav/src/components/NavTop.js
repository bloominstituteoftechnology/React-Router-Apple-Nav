import React from 'react';
import Tab from './NavTopTab';
 const links = [
  {id:1,
  link: 'Mac'},
  {id:2,
  link: 'iPad'},
  {id:3,
  link: 'iPhone'},
  {id:4,
  link: 'Watch'},
  {id:5,
  link: 'TV'},
  {id:6,
  link: 'Music'},
  {id:7 ,
  link:'Support'}
]
 const NavTop= (props) => {
  return (
    <div className='tabs'>
    {links.map(item => <Tab id={item.id} link={item.link} />)}
    </div>
  )
}
 export default NavTop;