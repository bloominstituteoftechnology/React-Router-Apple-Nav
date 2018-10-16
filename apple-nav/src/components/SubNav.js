import React from 'react'
import { Wrapper, NavItem } from '../styles/SubNav'

const SubNav = ({ links }) => (
  <Wrapper>
    {links.map(({ name, img, width }, i) => (
      <NavItem key={i}>
        <img alt={name} src={img} style={{ width }} />
        <p>{name}</p>
      </NavItem>
    ))}
  </Wrapper>
)

export default SubNav
