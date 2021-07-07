import React from 'react';


const SubNav = props => {
  return(
      <>
        {props.data.map(item => item.subImgs.map(img => <img src={img} />))}
    </>
  )
}

export default SubNav;