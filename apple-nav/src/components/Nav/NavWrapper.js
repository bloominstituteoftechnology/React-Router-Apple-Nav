import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class NavWrapper extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuItems: []
    }
  }

  componentDidMount () {
    this.setState({ menuItems: [...this.props.menuItems] }) // this step ensures state remains immutable since arrays are 'by reference' types
  }

  render () {
    return <Nav menuItems={this.state.menuItems} />
  }
}

// defining types, i believe, is good practice -Axhon
NavWrapper.propTypes = {
  menuItems: PropTypes.array.isRequired
}

const Nav = ({ menuItems }) => {
  return (
    <div className='Nav'>
      {menuItems.map(menuVal => {
        return (
          <Link className='Nav--item' to={`/${menuVal.toLowerCase()}`}>
            {menuVal}
          </Link>
        ) // eventually will be a pretty component
      })}
    </div>
  )
}

// this is not how this should work
Nav.propTypes = {
  menuItems: PropTypes.array
}

export default NavWrapper
