import React from 'react'
import './NavWrapper.css'
import logo from '../Images/Apple Navigation SVG/applelogo.PNG'
import search from '../Images/Apple Navigation SVG/applesearch.PNG'
import cart from '../Images/Apple Navigation SVG/applecart.PNG'

class NavWrapper extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }



    render() {
        return (
            <div className='appleHeader'>
                <div className='headerWrapper'>
                    <img className='appleLogo' src={logo} />
                    <p className='headerLettering'>Mac</p>
                    <p className='headerLettering'>iPad</p>
                    <p className='headerLettering'>iPhone</p>
                    <p className='headerLettering'>Watch</p>
                    <p className='headerLettering'>TV</p>
                    <p className='headerLettering'>Music</p>
                    <p className='headerLettering'>Support</p>
                    <img className='appleLogo' src={search} />
                    <img className='appleLogo' src={cart} />
                </div>
            </div>
        )
    }
}

export default NavWrapper;