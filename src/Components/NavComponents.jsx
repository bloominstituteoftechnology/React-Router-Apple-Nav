import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

export function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

const SubNavLink = styled.a`
  color: black;
  font-size: 11px;

  &:hover {
    color: #0070c9;
  }
`;

const SmallImg = styled.img`
  max-width: 50px;
  max-height: 50px;
`;

const NavContainerLight = styled.div`
  background: rgba(242, 242, 242, 0.6);
  display: flex;
  width: 100%;
  height: 116px;
`;

const NavLinksContainer = styled.div`
  width: 44%
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconContainer = styled.div`
  padding-bottom: 10px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;

export function Mac() {
  return (
    <NavContainerLight>
      <NavLinksContainer>
        <IconContainer>
          <SubNavLink href="#">MacBook Air</SubNavLink>
          <img src="https://www.apple.com/v/mac/home/ai/images/familybrowser/macbookair__ej39du0gz4uq_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLink href="#">MacBook Pro</SubNavLink>
          <img src="https://www.apple.com/v/mac/home/ai/images/familybrowser/macbookpro__enfip2k1cxkm_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLink href="#">iMac</SubNavLink>
          <img src="https://www.apple.com/v/mac/home/ai/images/familybrowser/imac__dkswmjfqeziq_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLink href="#">iMac Pro</SubNavLink>
          <img src="https://www.apple.com/v/mac/home/ai/images/familybrowser/imac_pro__eer4bfwlutme_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLink href="#">Mac Pro</SubNavLink>
          <img src="https://www.apple.com/v/mac/home/ai/images/familybrowser/mac_pro__bn92faz71k6a_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLink href="#">Mac mini</SubNavLink>
          <SmallImg src="https://www.apple.com/v/mac/home/ai/images/familybrowser/macmini__c6u0it831y0y_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLink href="#">Compare</SubNavLink>
          <img src="https://www.apple.com/v/mac/home/ai/images/familybrowser/mac_comp__ee2pokmcxh26_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLink href="#">Pro Display XDR</SubNavLink>
          <SmallImg src="https://www.apple.com/v/mac/home/ai/images/familybrowser/pro_display_xdr__do0vjpny1kqe_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLink href="#">Accessories</SubNavLink>
          <img src="https://www.apple.com/v/mac/home/ai/images/familybrowser/mac_acc__fy6vtx5eqoyi_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLink href="#">Catalina</SubNavLink>
          <img src="https://www.apple.com/v/mac/home/ai/images/familybrowser/mac_osx__dntc9ef2limq_large.svg" />
        </IconContainer>
      </NavLinksContainer>
    </NavContainerLight>
  );
}

export function IPad() {
  return (
    <div>
      <h2>IPad</h2>
      <SubNavLink href="#">iPad Pro</SubNavLink>
      <SubNavLink href="#">iPad Air</SubNavLink>
      <SubNavLink href="#">iPad</SubNavLink>
      <SubNavLink href="#">iPad mini</SubNavLink>
      <SubNavLink href="#">Compare</SubNavLink>
      <SubNavLink href="#">Apple Pencil</SubNavLink>
      <SubNavLink href="#">Smart Keyboard</SubNavLink>
      <SubNavLink href="#">Accessories</SubNavLink>
      <SubNavLink href="#">iPadOS</SubNavLink>
    </div>
  );
}

export function IPhone() {
  return (
    <div>
      <h2>iPhone</h2>
      <SubNavLink href="#">iPhone 11 Pro</SubNavLink>
      <SubNavLink href="#">iPhone 11</SubNavLink>
      <SubNavLink href="#">iPhone XR</SubNavLink>
      <SubNavLink href="#">iPhone 8</SubNavLink>
      <SubNavLink href="#">Compare</SubNavLink>
      <SubNavLink href="#">Apple Card</SubNavLink>
      <SubNavLink href="#">Airpods</SubNavLink>
      <SubNavLink href="#">Accessories</SubNavLink>
      <SubNavLink href="#">i0S 13</SubNavLink>
    </div>
  );
}

export function Watch() {
  return (
    <div>
      <h2>Watch</h2>
      <SubNavLink href="#">Apple Watch Series 5</SubNavLink>
      <SubNavLink href="#">Apple Watch Nike</SubNavLink>
      <SubNavLink href="#">Apple Watch Hermes</SubNavLink>
      <SubNavLink href="#">Apple Watch Edition</SubNavLink>
      <SubNavLink href="#">Apple Watch Series 3</SubNavLink>
      <SubNavLink href="#">Compare</SubNavLink>
      <SubNavLink href="#">Bands</SubNavLink>
      <SubNavLink href="#">Airpods</SubNavLink>
      <SubNavLink href="#">Accessories</SubNavLink>
      <SubNavLink href="#">watchOS</SubNavLink>
    </div>
  );
}

export function Television() {
  return (
    <div>
      <h2>Television</h2>
      <SubNavLink href="#">Apple TV app</SubNavLink>
      <SubNavLink href="#">Apple TV+</SubNavLink>
      <SubNavLink href="#">Apple TV 4K</SubNavLink>
      <SubNavLink href="#">Apple TV HD</SubNavLink>
      <SubNavLink href="#">Airplay</SubNavLink>
      <SubNavLink href="#">Accessories</SubNavLink>
    </div>
  );
}

export function Music() {
  return (
    <div>
      <h2>Music</h2>
      <SubNavLink href="#">Apple Music</SubNavLink>
      <SubNavLink href="#">HomePod</SubNavLink>
      <SubNavLink href="#">AirPods</SubNavLink>
      <SubNavLink href="#">iPod Touch</SubNavLink>
      <SubNavLink href="#">Music Accessories</SubNavLink>
      <SubNavLink href="#">Gift Cards</SubNavLink>
    </div>
  );
}

export function Support() {
  return (
    <div>
      <h2>Support</h2>
    </div>
  );
}
