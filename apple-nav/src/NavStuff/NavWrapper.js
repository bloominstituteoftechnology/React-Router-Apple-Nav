import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import styles from './NavWrapper.css';
import { Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faApple } from '@fortawesome/free-brands-svg-icons';


import BottomNav from './BottomNav.js';
import MainContent from '../MainContent/MainContent.js'

library.add(faApple);

const TopNav=styled.div`
display:flex;
margin:auto;
width:90%;
justify-content:space-between;
text-decoration:none;
background-color:black;
color:white;
`
const TopNavLink=styled.div`
color:white;
margin:12px;
margin-left:60px;
margin-right:60px;
text-decoration:none;

`


const NavWrapper=(props)=>{
    const productTypes=props.productTypes;

    return(
    <div>
    <TopNav>
    <Link to="/"><TopNavLink><FontAwesomeIcon icon={faApple} /></TopNavLink></Link>

        {props.productTypes.map(
        (type)=>{
            return(
                <Link key={type.name} className="TopLink" to={`/${type.name}`}> <TopNavLink>{type.name}</TopNavLink> </Link>
            )
        }

        )}

    </TopNav>

        <div className="BottomNav">
            <Route path="/:id" render={(props)=>(

                <BottomNav {...props} productTypes={productTypes}>
    
                </BottomNav>
            )
            }/>
            <Route path={`/:id/:itemid`} render={(props)=>(
                    <MainContent {...props} productTypes={productTypes}></MainContent>
                )
            }
            />


        
        </div>
    </div>

    )
}

export default NavWrapper;