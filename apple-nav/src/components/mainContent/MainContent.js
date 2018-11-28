import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { CSSTransition,TransitionGroup } from 'react-transition-group';

function MainContent(props) {
    return (



    <div className="main-content">
         <TransitionGroup>
            <CSSTransition
              key={props.location.pathname}
              timeout={500}
              classNames="fade"
            >
              <Switch location={props.location}>

        <Route exact path='/'
            component={()=>
            (<p className="page-content">Welcome!</p>)} />
        <Route exact path='/myComps/' 
            component={()=>
            (<p className="page-content">myComps are Awesome! Select one to learn more!</p>)}/>
        <Route path='/myComps/myBookWind'
            component={()=>
            (<p className="page-content">myBook Wind is Awesome!</p>)}/>
        <Route path='/myComps/myBookSuper'
            component={()=>
            (<p className="page-content">myBook Super is Super Awesome!</p>)}/>
        <Route path='/myComps/myMac'
            component={()=>
            (<p className="page-content">myMac is Pretty Great!</p>)}/>
        <Route path='/myComps/myBook'
            component={()=>
            (<p className="page-content">myBook is some Good Stuff!</p>)}/>


        <Route exact path='/myPhones/' 
            component={()=>
            (<p className="page-content">myPhones are Awesome! Select one to learn more!</p>)}/>
        <Route path='/myPhones/myPhone10x'
            component={()=>
            (<p className="page-content">myPhone 10x is X-Treme!!!</p>)}/>
        <Route path='/myPhones/myPhone10y'
            component={()=>
            (<p className="page-content">myPhone 10y? <br/> Y-Not!?</p>)}/>
        <Route path='/myPhones/myPhoneVIII'
            component={()=>
            (<p className="page-content">myPhone VIII is Grrrrreat!</p>)}/>
        <Route path='/myPhones/myPhoneVII'
            component={()=>
            (<p className="page-content">myPhone VII is a slice of heaven!</p>)}/>

        <Route exact path='/myPads/' 
            component={()=>
            (<p className="page-content">myPads are Awesome! Select one to learn more!</p>)}/>
        <Route path='/myPads/myPadSuper'
            component={()=>
            (<p className="page-content">myPad Super is Super Duper!!!</p>)}/>
        <Route path='/myPads/myPad'
            component={()=>
            (<p className="page-content">myPad is pretty Rad!</p>)}/>
        <Route path='/myPads/myPadTiny'
            component={()=>
            (<p className="page-content">myPad Tiny. <br/> Good things come in small packages!</p>)}/>
        <Route path='/myPads/accessories'
            component={()=>
            (<p className="page-content">BUY STUFF!</p>)}/>


                </Switch>
            </CSSTransition>
        </TransitionGroup>
    </div>
    )
}

export default withRouter(MainContent);