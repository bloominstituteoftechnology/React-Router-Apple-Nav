import React, { Component } from "react"
import { Link } from "react-router-dom"

class NavWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuItems: []
    }
  }

  componentDidMount() {
    this.setState({ menuItems: [...this.props.menuItems] }) // this step ensures state remains immutable since arrays are 'by reference' types
  }

  render() {
    return <Nav menuItems={this.state.menuItems} />
  }
}

const Nav = ({ menuItems }) => {
  return (
    <div className="Nav">
      {menuItems.map(menuVal => {
        return (
          <Link className="Nav--item" to={`/${menuVal.toLowerCase()}`}>
            {menuVal}
          </Link>
        ) // eventually will be a pretty component
      })}
    </div>
  )
}

export default NavWrapper
