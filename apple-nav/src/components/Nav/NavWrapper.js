import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class NavWrapper extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuItems: [],
      isSub: false
    }
  }

  componentDidMount () {
    this.setState({
      menuItems: [...this.props.menuItems],
      isSub: this.props.isSub
    }) // this step ensures state remains immutable since arrays are 'by reference' types
  }

  render () {
    return <Nav isSub={this.state.isSub} menuItems={this.state.menuItems} />
  }
}

// defining types, i believe, is good practice -Axhon
NavWrapper.propTypes = {
  menuItems: PropTypes.array.isRequired,
  isSub: PropTypes.bool
}

const Nav = ({ menuItems, isSub }) => (
  <div className={isSub === 'true' ? 'Nav SubNav' : 'Nav'}>
    {menuItems.map(menuVal => (
      <Link className='Nav--item' to={`/${menuVal.toLowerCase()}`}>
        {menuVal}
      </Link>
    )) // eventually will be a pretty component
    }
  </div>
)

// this is not how this should work
Nav.propTypes = {
  menuItems: PropTypes.array,
  isSub: PropTypes.bool
}

export default NavWrapper
