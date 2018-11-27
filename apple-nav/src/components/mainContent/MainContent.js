import React from 'react';
import { Route, NavLink } from 'react-router-dom';

function MainContent() {
    return (

    <div className="main-content">
        <Route exact path='/'
            component={()=>
            (<p>Welcome!</p>)} />

        <Route exact path='/myComps/' 
            component={()=>
            (<p>myComps are Awesome! Select one to learn more!</p>)}/>
        <Route path='/myComps/myBookWind'
            component={()=>
            (<p>myBook Wind is Awesome!</p>)}/>
        <Route path='/myComps/myBookSuper'
            component={()=>
            (<p>myBook Super is Super Awesome!</p>)}/>
        <Route path='/myComps/myMac'
            component={()=>
            (<p>myMac is Pretty Great!</p>)}/>
        <Route path='/myComps/myBook'
            component={()=>
            (<p>myBook is some Good Stuff!</p>)}/>


        <Route exact path='/myPhones/' 
            component={()=>
            (<p>myPhones are Awesome! Select one to learn more!</p>)}/>
        <Route path='/myPhones/myPhone10x'
            component={()=>
            (<p>myPhone 10x is X-Treme!!!</p>)}/>
        <Route path='/myPhones/myPhone10y'
            component={()=>
            (<p>myPhone 10y? <br/> Y-Not!?</p>)}/>
        <Route path='/myPhones/myPhoneVIII'
            component={()=>
            (<p>myPhone VIII is Grrrrreat!</p>)}/>
        <Route path='/myPhones/myPhoneVII'
            component={()=>
            (<p>myPhone VII is a slice of heaven!</p>)}/>

        <Route exact path='/myPads/' 
            component={()=>
            (<p>myPads are Awesome! Select one to learn more!</p>)}/>
        <Route path='/myPads/myPadSuper'
            component={()=>
            (<p>myPad Super is Super Duper!!!</p>)}/>
        <Route path='/myPads/myPad'
            component={()=>
            (<p>myPad is pretty Rad!</p>)}/>
        <Route path='/myPads/myPadTiny'
            component={()=>
            (<p>myPad Tiny. <br/> Good things come in small packages!</p>)}/>
        <Route path='/myPads/accessories'
            component={()=>
            (<p>BUY STUFF!</p>)}/>
    </div>
    )
}

export default MainContent;