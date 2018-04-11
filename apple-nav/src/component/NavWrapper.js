import React,{Component} from 'react'
import{ Link, Switch, Route } from 'react-router-dom'
import Navigation from './Nav.js';


class NavWrapper extends Component{
    

render(){
    return(
<div>
<Navigation />
<Switch>
    <Route exact path='/' />
    <Route path='/mac' />
    <Route path='/ipad' />
    <Route path='/watch' />
    <Route path='/tv' />
    <Route path='/music' />
    <Route path='/support' />
    <Route component={FourZeroFour} />

</Switch>

</div>

    )
}
}
const FourZeroFour = () =>{
    return(
    <div className='forZeroFour'>
    <h3>Haha, Nerd!</h3>
    </div>
    )
}



export default NavWrapper;