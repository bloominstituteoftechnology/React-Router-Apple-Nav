import React from 'react';
import { NavLink } from 'react-router-dom';
import { Transition } from 'react-transition-group'

const defaultStyle = {
  transition: 'transform 300ms ease-in-out'
}

const transitionStyles = {
  entering: { transform: 'translate(300px)' },
  entered: { transform: 'translate(0px)' }
}

const Submenu = ({ match, items }) => {
  return (
    <div className='Submenu'>
      <Transition appear={true} in={true} timeout={0}>
        {(state) => {
          console.log(state);
          return (<div
            className='Submenu'  
            key='submenu'  
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}>
            {items.map((item) => {
              return <NavLink to={`${match.url}/${item.path}`}>{item.title}</NavLink>
            })}
          </div>)
        }}
      </Transition>
    </div>
  )
}

export default Submenu;