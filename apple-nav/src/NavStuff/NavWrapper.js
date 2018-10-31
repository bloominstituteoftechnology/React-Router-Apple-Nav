import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import styles from './NavWrapper.css';
import { Route } from 'react-router-dom';
import BottomNav from './BottomNav.js';
import MainContent from '../MainContent/MainContent.js'

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
text-decoration:none;

`


const NavWrapper=(props)=>{
    const productTypes=props.productTypes;
    return(
    <div>
    <TopNav>

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