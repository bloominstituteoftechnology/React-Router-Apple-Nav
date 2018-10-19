import React from 'react';

const SubNav = (props)=>{
    return (
        <div>
            {props.data.imgs.map((img)=>{
                // TODO: Find way to write alt prop
                return <img key={img} src={img} alt="Test"></img>
            })}
        </div>
    )
}

export default SubNav;