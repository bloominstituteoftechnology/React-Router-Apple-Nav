import React from 'react';
import { Link, Route } from 'react-router-dom';

 /* Products components */
 const MacBook = () => (
  <div>
  <h2>MacBook</h2>
  </div>
)
const MacBookAir = () => (
  <div>
  <h2>MacBook Air</h2>
  </div>
)
const MacBookPro = () => (
  <div>
  <h2>MacBook Pro</h2>
  </div>
)
const iMac = () => (
  <div>
  <h2>iMac</h2>
  </div>
)
const iMacPro = () => (
  <div>
  <h2>iMac Pro</h2>
  </div>
)

const Category = ({ match }) => {
  return(
    <div>
      {" "}
      <ul>
        <li><Link to={`${match.url}/MacBook`}>MacBook</Link></li>
        <li><Link to={`${match.url}/MacBookAir`}>MacBook Air</Link></li>
        <li><Link to={`${match.url}/MacBookPro`}>MacBook Pro</Link></li>
        <li><Link to={`${match.url}/iMac`}>iMac</Link></li>
        <li><Link to={`${match.url}/iMacPro`}>iMac Pro</Link></li>
      </ul>
      <Route path={`${match.path}/:name`} render={({match}) => ( 
        <div>
          {" "}
          <h3>match.params.name</h3>
        </div>
      )}/>
    </div>
  )
}

export default Category;