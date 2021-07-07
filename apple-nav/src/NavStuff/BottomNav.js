import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';



const BottomNavStyled=styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
width:90%;
margin:auto;
`

const BottomNavImage=styled.img`
margin-top:none;
margin-left:12px;
`

const BottomNavImages=styled.div`
display: flex;
justify-content: space-around;
width: 100%;`

const BottomNav=(props)=>{
    const category=props.match.params.id;

    return(
        <BottomNavStyled>{props.productTypes.map(
            
            (type)=>{
            
            if(type.name===category){
                return(
                    <BottomNavImages>

                    {type.types.map(
                    (
                        (ItemForSale)=>{
                            return(
                                
                                  <Link to={`/${type.name}/${ItemForSale.typeName}`}><BottomNavImage src={ItemForSale.img}/></Link> 
                                
                            )
                            console.log(ItemForSale.img);
                        }

                    )
                )}

                    </BottomNavImages>
                )
                console.log("one answer");
                console.log(type.name);
                console.log(category);
                console.log(type.types);
                
  
            }

        })}</BottomNavStyled>

    )
}


export default BottomNav;