import React from 'react';
import {Link, Route} from 'react-router-dom';
import styled from 'styled-components'; 



import NavBox from './HomeNav.js';
import Item from './Item.js';

const navTags = ["Mac", "iPad", "iPhone", "Watch", "TV", "Music"];
const choices = {"Mac":["MacBook", "MacBook Air", "MacBook Pro", "iMac", "iMac Pro", "Mac Pro", "Mac mini", "Accessories", "High Sierra", "Compare"],
 "iPad": ["iPad Pro", "iPad", "iPad mini 4", "iOS 11", "Accessories", "Compare"],
  "iPhone":["iPhone X", "iPhone 8", "iPhone 7", "iPhone 6s", "iPhone SE", "iOS 11", "Accessories", "Compare"],
   "Watch": ["Apple Watch Series 3", "Apple Watch Nike+", "Apple Watch Hermes", "Apple Watch Edition", "Apple Watch Series 1", "watchOS", "Bands", "Accessories", "Compare"],
    "TV":["Apple TV 4K", "Apple TV", "TV App", "Accessories", "Compare"],
     "Music": ["Apple Music", "iTunes", "HomePod", "iPod touch", "Music Accessories", "Gift Cards"] }
const NewSection = styled.div`
    width: 100%;
    display: flex; 
    justify-content: center; 
    
    background: black; 
    color: white;
    a {
        text-decoration: none; 
        color: white; 
    }
    a:hover{
        color: blue; 
    }

`;
const AddedSection = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center; 
    width: 900px;
    color: white;
    margin-left: 250px;
    margin-right: 250px; 

`;

const SectionDiv = styled.div`
    display: flex;
    align-items: center;
    height: 50px; 
    word-wrap: break-word; 
    font-size: 10px; 
`;

class Chosen extends React.Component {
    constructor(props){
        super(props); 
        this.state = {}
    }

    render(){
        const choice = navTags.find( cho => cho.toLowerCase() === this.props.match.params.id);
        const toPath = this.props.match.params.id; 
        
        return(
            <div>
            <NewSection> 
                <AddedSection> 
                    {choices[choice].map((cho, i) => <Link key={i} to ={`/${toPath}/${cho.toLowerCase().split(' ').join('')}`}><SectionDiv key = {i}>{cho}</SectionDiv></Link>)}
                </AddedSection>
                
                
            </NewSection>
            <Route path ={`/${toPath}/:itemId`} render = {(props) => <Item {...props} />}/>
            </div>

        );
    }
}

export default Chosen; 