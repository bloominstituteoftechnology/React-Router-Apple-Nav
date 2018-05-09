import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Home from './Home';
import Mac from './Mac';
import iPad from './iPad';
import Watch from './Watch';
import TV from './TV';
import Music from './Music';
import Support from './Support';
import Search from './Search';
import Bag from './Bag';

export default class Nav extends Component  {
    render () {
        return (
            <div className={"nav"}>
            <Link to="/">Home</Link> |&nbsp;
            <Link to="/mac">Mac</Link> |&nbsp;  
            <Link to="/ipad">iPad</Link> |&nbsp;  
            <Link to="/watch">Watch</Link> |&nbsp;
            <Link to="/tv">TV</Link> |&nbsp;
            <Link to="/music">Music</Link> |&nbsp;
            <Link to="/support">Support</Link> |&nbsp;
            <Link to="/search">Search</Link> |&nbsp;
            <Link to="/bag">Bag</Link> |&nbsp;
            {/* <Switch> */}
                <Route exact path="/" component={Home} /> 
                <Route path="/mac" component={Mac} /> 
                <Route path="/iPad" component={iPad} /> 
                <Route path="/Watch" component={Watch} />
                <Route path="/TV" component={TV} /> 
                <Route path="/Music" component={Music} />
                <Route path="/Support" component={Support} />
                <Route path="/Search" component={Search} /> 
                <Route path="/Bag" component={Bag} /> 
            {/* </Switch> */}
            </div>
        )
    }
}
