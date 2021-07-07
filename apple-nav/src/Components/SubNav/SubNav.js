import React from 'react';
import './SubNav.css';


const SubNavWrapper = () => {
        return(
            <div className='subNavHeader'>
              
            </div>)
        }

export default SubNavWrapper


// if match params is mac, display the array 
// array of objects
// first one is mac, with a value of an array with the mac submneu
// repeat for all the others
// in subnav, use a method to find the match params
// map threw the object return list item with device
// make so home doesn't show up at all


const SubNavBank = [
    {  'mac': [ 'macbook', 'macbook air', 'macbook pro']},    
    {  'ipad': [ 'ipad Pro', 'iPad', 'iPad Mini']}, 
    {  'iPhone': [ 'iPhone 5s', 'iPhone 6S', 'iPhone XXX']}, 
    {  'Watch': [ 'iMovie', 'iPhotos' ]}, 
    {  'TV': [ 'AppleTV', 'MacScreen']}, 
]