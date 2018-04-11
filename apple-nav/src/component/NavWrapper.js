import React,{Componnet} from 'react'
import{ Link } from 'react-router-dom'
import Navigation from './nav.js';


class NavWrapper extends Component{
    
}
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
    <Route component={fourZeroFour} />

</Switch>

</div>

    )
}
const fourZeroFour = () =>(
    <div className='forZeroFour'>
    <h3>OOOOOOH~!, you fucked uuuuup<h3>
)

}