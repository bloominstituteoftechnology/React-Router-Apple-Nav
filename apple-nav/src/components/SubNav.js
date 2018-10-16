import React from 'react'
import { Wrapper, NavItem, Text } from '../styles/SubNav'

const SubNav = ({ links, odd }) => (
  <Wrapper odd={odd}>
    {links.map(({ name, img, width }, i) => (
      <NavItem key={i} odd={odd}>
        <img alt={name} src={img} style={{ width, height: '54px' }} />
        <Text>{name}</Text>
      </NavItem>
    ))}
  </Wrapper>
)

export default SubNav
