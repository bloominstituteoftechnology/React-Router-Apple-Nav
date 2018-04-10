import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import dummyData from '../dummyData';
import logo from './Images/image_large.svg';
import './MainNav.css';
import SubNav from './SubNav';

const styled = {
    textDecoration: 'none', 
    color: 'white'
};


class MainNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dummyData: []
        }
    }
    
    componentDidMount() {
        this.setState({ dummyData });
    } 

    render() {
        if (!this.state.dummyData) return <div>Loading Data...</div>;
        return (
            <div className="nav">
                <div className='nav__links-Container'>
                    <Link to="/" ><img src={logo} alt='Apple' /></Link>
                    {this.state.dummyData.map((data, index) => (
                        <div className="nav__links" key={data.id + index + data.name}>
                            <Link to={`/${data.name}`} style={styled}>
                                {data.name}
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="nav">
                    <Route
                        path="/:mainID"
                        render={(props) => <SubNav {...props} />}
                    />
                </div>
            </div>
        );
    }
};

export default MainNav;