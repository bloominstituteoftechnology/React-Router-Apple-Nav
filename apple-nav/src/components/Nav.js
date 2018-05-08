import React from 'react';
import SubNav from './SubNav';
import { Route, Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <div>
            <Link to={`/${props.nav.category}`}>
                {props.nav.category}
            </Link>
            {props.nav.subCategories.map(subNav => {
                return (
                    <Link 
                        to={
                        `/${props.nav.category}/`
                        } 
                        key={subNav.name}>
                        <Route 
                            path={`/${props.nav.category}`}
                            render={props => <SubNav {...props} sub={subNav}/>}
                        />
                        {/* <SubNav sub={subNav}/> */}
                    </Link>
                )
            })}
        </div>
    )
}
 
export default Nav;