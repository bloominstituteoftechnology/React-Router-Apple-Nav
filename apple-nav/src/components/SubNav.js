import React from 'react';



const SubNav = (props) => {
    
    
        return(
            <div className = "sub-nav">
                {props.link.map(data => (
                   <div className = "sub-nav-link">
                    <img src = {data.icon} alt = {data.name} />
                    <span>{data.name}</span>
                   </div>
                ))}
            </div>
        )
    
}

export default SubNav