import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { SubNav } from '../components'


export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subNav: []
        }
    }
componentDidMount() {
    const id = this.props.match.params.id
    this.fetchNav(id)
}

fetchNav = id => {
    const subNav = this.state.subNav;
    subNav.push(id);
    this.setState({ subNav });
    <Route path={this.state.subnav}/>
}

render() {
    return (
        <div>
        <h5> What is happening? </h5>
        </div>
    )
    }
}