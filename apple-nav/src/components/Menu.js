import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Menu extends Component {
  render () {
    return (
      <div className='saved-list'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <h3>
            <i className='fab fa-apple' />
          </h3>
        </Link>
        <Link to='/Mac'>
          <h3>Mac</h3>
        </Link>
        <Link to='/Ipad'>
          <h3>iPad</h3>
        </Link>
        <Link to='/Iphone'>
          <h3>iPhone</h3>
        </Link>
        <Link to='/Watch'>
          <h3>Watch</h3>
        </Link>
        <Link to='/Tv'>
          <h3>TV</h3>
        </Link>
        <Link to='/Music'>
          <h3>Music</h3>
        </Link>
        <Link to='/Support'>
          <h3>Support</h3>
        </Link>
        <Link to='/search'>
          <h3>
            <i className='fas fa-search' />
          </h3>
        </Link>
        <Link to='/Shop'>
          <h3>
            <i class='fas fa-shopping-bag' />
          </h3>
        </Link>
      </div>
    )
  }
}
