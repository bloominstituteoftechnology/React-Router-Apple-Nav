import React from 'react'
import styled from "styled-components";
import {NavLink} from "react-router-dom"

const ANav = styled.div `
background: gray;
heigh:48%;
padding:10px;
width:100%;
`

const SubNav= ({mac}) => {

  return (
    <ANav>
          {mac.map(product =>
              <NavLink to="/" className="subNav" key={product.id}>
                  <img src={product.img} alt={product.name} />
                  <span>{product.name}</span>
     </NavLink>
     )}

  </ANav>
  )

}



export default SubNav