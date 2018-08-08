import React from 'react';



const SubNav = (props) => {
    
    
        return(
            <div className = "sub-nav">
                {props.link.subLink.map(data => (
                   <div>
                    <img src = {data.icon} alt = {data.name} />
                    <span>{data.name}</span>
                   </div>
                ))}
            </div>
        )
    
}

export default SubNav