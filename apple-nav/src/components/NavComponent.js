import { NavLink } from 'react-router-dom'
import React from 'react'

const navItems = [
    {id: 1, val: "Mac"},
    {id: 2, val: "Ipad"},
    {id: 3, val: "Iphone"},
    {id: 4, val: "Watch"},
    {id: 5, val: "TV"},
    {id: 6, val: "Music"},
    {id: 7, val: "Support"}
]

export function NavContainer (props) {
    return (
        <ul className="navbar">
            {navItems.map(item => <li key={item.id}><NavLink to={`/${item.val.toLowerCase()}`}> {item.val} </NavLink> </li>)}
        </ul>
    )
}