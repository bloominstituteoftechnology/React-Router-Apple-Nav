import { NavLink } from 'react-router-dom'
import React from 'react'

const subNavItems = {
    "mac": ['bfc', 'afc'],
    'ipad': ['sdsd'],
    'iphone': ['sdsf'],
    'watch': ['sdfds'],
    'music': ['sds'],
    'support': ['ssdf'],
    'tv': ['t']
}

export function SubNav (props){
    const product = props.match.params.product 
    const item = subNavItems[product]
    return (
        <ul className="navbar">
            {item.map(item => <li key={item}>{item}</li>)}
        </ul>
    )
}