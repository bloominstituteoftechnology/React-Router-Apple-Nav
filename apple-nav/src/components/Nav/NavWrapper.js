import React from 'react'
import Nav from './Nav';



const NavWrapper = () => (
    <div>
        <div className="Nav-header">
            <Nav href="/" src="https://www.apple.com/ac/globalnav/3/en_US/images/globalnav/apple/image_large.svg"/>
            <Nav href="/mac" linkText="Mac"/>
            <Nav href="/ipad" linkText="Ipad"/>
            <Nav href="/Watch" linkText="Watch"/>
        </div>
    </div>
)
export default NavWrapper