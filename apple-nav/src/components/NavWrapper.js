import React, { Component } from 'react';
import '../index.css';
import Nav from './Nav';
import SubNav from './SubNav';

class NavWrapper extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentNav: null
      };
    }

    changeNav = event => {
        console.log('from changenav...', event.target)
        this.setState({
            currentNav: event.target
        })
    }

    render() {
        console.log('from navwrapper render', this.state.currentNav)
        return (
            <div className='navWrapper-container'>
                {/* {this.props.data.map((product, index) => (
                    <Nav 
                        product={product}
                        key={index}
                    />
                ))} */}
                <Nav 
                    product={this.props.data}
                    changeNav={this.changeNav}
                />
                <div>
                    {this.props.data.map((product, index) => (
                        <SubNav 
                            product={product}
                            subLinks={product.subLinks}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default NavWrapper;