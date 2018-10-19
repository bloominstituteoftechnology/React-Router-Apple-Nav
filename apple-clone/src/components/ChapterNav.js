import React from 'react'
import styled from "styled-components";


const ANav = styled.div `
background: gray;
heigh:48%;
padding:10px;
width:100%;
`

const ChapterNav = props => {
console.log(props)
  return (
  <ANav>
          {props.imgs.map( (img, index) => (
              <img src={img} key={index} alt=" "/>
          ))}
  </ANav>
  )

}



export default ChapterNav