import React from 'react'

const Content = (props) => (
    <div className="Content-wrapper">  
        <h2 className="Content-h2" aria-hidden="true">iPhone X</h2>
        <h3 className="Content-h3" aria-hidden="true">Say hello to the future.</h3>
        <img className="Content-img" src={props.content} alt=""/>
    </div>
  )

  export default Content;