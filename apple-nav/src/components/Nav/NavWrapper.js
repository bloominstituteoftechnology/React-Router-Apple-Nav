import React from 'react'
import Nav from './Nav';



const NavWrapper = (props) => (
    <div>
        {console.log("where is my match in NavWrapper", props)}
        <div className="Nav-header">
            {props.menuData.map((menu, index) => {
                console.log("menu ", props.match.path)
            {return <Nav key={index} path={`${props.match.path}${menu.name}`} name={menu.name} src={menu.src}/> } })
            }
        </div>
    </div>
)
export default NavWrapper