import React from 'react'
import Nav from './Nav';



const NavWrapper = (props) => (
    <div>
        {console.log("where is my match in NavWrapper", props.match.path)}
        <div className="Nav-header">
            {props.menuData.map((menu, index) => 
                <Nav key={index} path={menu.name} name={menu.name} src={menu.src}/> )}
        </div>
    </div>
)
export default NavWrapper