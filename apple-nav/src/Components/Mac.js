import React from "react";
import styled from "styled-components";
import {NavLink, Route} from "react-router-dom";
import Macmain from "../images/macmain.jpg";
import Macbookair from "../images/macbookair.png";
import M13 from "../images/macbookpro13.png";
import M16 from "../images/macbookpro16.png";
import Imac from "../images/imac.png";
import ImacPro from "../images/imacpro.png";
import MacPro from "../images/macpro.png";
import MacMini from "../images/macmini.png";
import Compare from "../images/compare.png";
import ProDisp from "../images/prodisplayxdr.png";
import Accessor from "../images/accessories.png";
import Catalina from "../images/catalina.png";
import MacbookAir from "./Macs/MacbookAir";

const MacNav = styled.div `
    background-color: #f9f9fa;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-top: 1rem;
    margin-bottom: 1rem;
`;
const MacImg = styled.img `
    min-width: 100%;
    height: auto;
`;

const Mac = () => {
    return (
        <div>
            <MacNav>
                <NavLink to="/mac/macbook-air" className="maclinks">
                    <img src={Macbookair} /><br/>
                    <span>MacBook Air</span>
                </NavLink>
                <NavLink to="/mac/macbook-pro-13" className="maclinks">
                    <img src={M13} /><br/>
                    <span>MacBook Pro 13”</span>
                </NavLink>
                <NavLink to="/mac/macbook-pro-16" className="maclinks">
                    <img src={M16} /><br/>
                    MacBook Pro 16”
                </NavLink>
                <NavLink to="/mac/imac" className="maclinks">
                    <img src={Imac} /><br/>
                    iMac
                </NavLink>
                <NavLink to="/mac/imac-pro" className="maclinks">
                    <img src={ImacPro} /><br/>
                    iMac Pro
                </NavLink>
                <NavLink to="/mac/mac-pro" className="maclinks">
                    <img src={MacPro} /><br/>
                    Mac Pro
                </NavLink>
                <NavLink to="/mac/mac-mini" className="maclinks">
                    <img src={MacMini} /><br/>
                    Mac mini
                </NavLink>
                <NavLink to="/mac/compare" className="maclinks">
                    <img src={Compare} /><br/>
                    Compare
                </NavLink>
                <NavLink to="/mac/pro-display-xdr" className="maclinks">
                    <img src={ProDisp} /><br/>
                    Pro Display XDR
                </NavLink>
                <NavLink to="/mac/accessories" className="maclinks">
                    <img src={Accessor} /><br/>
                    Accessories
                </NavLink>
                <NavLink to="/mac/catalina" className="maclinks">
                    <img src={Catalina} /><br/>
                    Catalina
                </NavLink>
            </MacNav>
            <MacImg src={Macmain}></MacImg>


            <Route path="/mac/macbook-air">
                <MacbookAir />
            </Route>

        </div>
    );
};

export default Mac;