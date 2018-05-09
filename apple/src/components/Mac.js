import React from 'react';
import './mac.css'
import {Route, Link } from 'react-router-dom';
import {Row, Col } from 'reactstrap';
const macList = ['MacBook','MacBook Air', 'MacBook Pro', 'iMac', 'iMac Pr', 'Mac Pro', 'Mac mini', 'Accessori', 'High Sierra', 'Compare']

const Mac =() => {
    return(
        <Row className="navBar macMenu">
            {macList.map((macItem, i) => {
                return (
                    <Col><Link to={`/mac/${macItem.toLowerCase()}`} key={macItem+i}>{macItem}</Link></Col>
                )
            })}
        </Row>
    )
}



// const Mac = (props) => {
//     console.log('props: ', props)
//     return  ( 
//         <div>
//             <Row className="navBar macMenu">  
//                 <Col></Col>
//                 <Col></Col>
//                 <Col></Col>
//                 <Col><Link to='/tv'>MacBook</Link></Col>
//                 <Col><Link to='/music'>MacBook Air</Link></Col>
//                 <Col><Link to='/support'>MacBook Pro</Link></Col>
//                 <Col><Link to='/search'>iMac</Link></Col>
//                 <Col><Link to='/shop'>iMac Pro</Link></Col>
//                 <Col><Link to='/music'>Mac Pro</Link></Col>
//                 <Col><Link to='/support'>Mac mini</Link></Col>
//                 <Col><Link to='/search'>Accessories</Link></Col>
//                 <Col><Link to='/shop'>High Sierra</Link></Col>
//                 <Col><Link to='/shop'>Compare</Link></Col>
//                 <Col></Col>
//                 <Col></Col>
//                 <Col></Col>
//             </Row>

            {/* <Route exact path='/mac/MacBook' component={MacBook}></Route>
            <Route path='/mac/macBook Air' component={MacBookAir}></Route>
            <Route path='/mac/macBook Pro' component={MacBookPro}></Route>
            <Route path='/mac/iMac' component={iMac}></Route>
            <Route path='/mac/iMacPro' component={iMacPro}></Route>
            <Route path='/mac/macPro' component={MacPro}></Route>
            <Route path='/mac/macmini' component={Macmini}></Route>
            <Route path='/mac/accessories' component={Accessories}></Route>
            <Route path='/mac/high Sierra' component={HighSierra}></Route>
            <Route path='/mac/compare' component={Compare}></Route> */}



            {/* const MacBook = () => {
                return <h2> Hello from this component </h2>
            }
            const MacBook Air = () => {
                return <h2> Hello from this component </h2>
            }
            const  MacBookPro = () => {
                return <h2> Hello from this component </h2>
            }
            const iMac = () => {
                return <h2> Hello from this component </h2>
            }
            const iMacPro = () => {
                return <h2> Hello from this component </h2>
            }
            const MacPro = () => {
                return <h2> Hello from this component </h2>
            }
            const Macmini = () => {
                return <h2> Hello from this component </h2>
            }
            const Accessories = () => {
                return <h2> Hello from this component </h2>
            }
            const HighSierra = () => {
                return <h2> Hello from this component </h2>
            }
            const Compare = () => {
                return <h2> Hello from this component </h2>
            } */}

//         </div>
//     )
// }

export default Mac;
