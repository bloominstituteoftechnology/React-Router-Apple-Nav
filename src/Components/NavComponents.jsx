import React from "react";
import styled from "styled-components";

const SubNavLinkLight = styled.a`
  color: black;
  font-size: 11px;
  text-decoration: none;

  &:hover {
    color: #0070c9;
  }
`;

const SubNavLinkDark = styled.a`
  color: white;
  font-size: 11px;
  text-decoration: none;

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
  margin-top: 44px;
  position: absolute;
`;

const NavContainerDark = styled.div`
  background: #111;
  display: flex;
  width: 100%;
  height: 116px;
  margin-top: 44px;
  position: absolute;
`;

const NavLinksContainer = styled.div`
  width: 44%
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const IconContainer = styled.div`
  padding-bottom: 10px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;

const BackgroundDiv = styled.div`
  background: black;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 116px;
`;

export function Home() {
  return <div></div>;
}

export function Mac() {
  return (
    <NavContainerLight>
      <NavLinksContainer>
        <IconContainer>
          <SubNavLinkLight href="#">MacBook Air</SubNavLinkLight>
          <SmallImg src="https://www.apple.com/v/mac/home/ai/images/familybrowser/macbookair__ej39du0gz4uq_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLinkLight href="#">MacBook Pro</SubNavLinkLight>
          <SmallImg src="https://www.apple.com/v/mac/home/ai/images/familybrowser/macbookpro__enfip2k1cxkm_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLinkLight href="#">iMac</SubNavLinkLight>
          <SmallImg src="https://www.apple.com/v/mac/home/ai/images/familybrowser/imac__dkswmjfqeziq_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLinkLight href="#">iMac Pro</SubNavLinkLight>
          <SmallImg src="https://www.apple.com/v/mac/home/ai/images/familybrowser/imac_pro__eer4bfwlutme_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLinkLight href="#">Mac Pro</SubNavLinkLight>
          <SmallImg src="https://www.apple.com/v/mac/home/ai/images/familybrowser/mac_pro__bn92faz71k6a_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLinkLight href="#">Mac mini</SubNavLinkLight>
          <SmallImg src="https://www.apple.com/v/mac/home/ai/images/familybrowser/macmini__c6u0it831y0y_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLinkLight href="#">Compare</SubNavLinkLight>
          <SmallImg src="https://www.apple.com/v/mac/home/ai/images/familybrowser/mac_comp__ee2pokmcxh26_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLinkLight href="#">Pro Display XDR</SubNavLinkLight>
          <SmallImg src="https://www.apple.com/v/mac/home/ai/images/familybrowser/pro_display_xdr__do0vjpny1kqe_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLinkLight href="#">Accessories</SubNavLinkLight>
          <SmallImg src="https://www.apple.com/v/mac/home/ai/images/familybrowser/mac_acc__fy6vtx5eqoyi_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLinkLight href="#">Catalina</SubNavLinkLight>
          <SmallImg src="https://www.apple.com/v/mac/home/ai/images/familybrowser/mac_osx__dntc9ef2limq_large.svg" />
        </IconContainer>
      </NavLinksContainer>
    </NavContainerLight>
  );
}

export function IPad() {
  return (
    <NavContainerLight>
      <NavLinksContainer>
        <IconContainer>
          <SubNavLinkLight href="#">iPad Pro</SubNavLinkLight>
          <SmallImg src="https://www.apple.com/v/ipad/home/at/images/chapternav/ipadpro_light__dxq7nxjgsd2e_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLinkLight href="#">iPad Air</SubNavLinkLight>
          <SmallImg src="https://www.apple.com/v/ipad/home/at/images/chapternav/ipadair_light__gan6yfrffc66_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLinkLight href="#">iPad</SubNavLinkLight>
          <SmallImg src="https://www.apple.com/v/ipad/home/at/images/chapternav/ipad_light__expohijp19si_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLinkLight href="#">iPad mini</SubNavLinkLight>
          <SmallImg src="https://www.apple.com/v/ipad/home/at/images/chapternav/ipadmini_light__bxpulkud30s2_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLinkLight href="#">Compare</SubNavLinkLight>
          <SmallImg src="https://www.apple.com/v/ipad/home/at/images/chapternav/ipad_comp_light__f80dzq6i8sq6_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLinkLight href="#">Apple Pencil</SubNavLinkLight>
          <SmallImg src="https://www.apple.com/v/ipad/home/at/images/chapternav/apple_pencil_light__e9zorbynwqie_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLinkLight href="#">Smart Keyboard</SubNavLinkLight>
          <SmallImg src="https://www.apple.com/v/ipad/home/at/images/chapternav/keyboard_light__cjbr6d6i2vbm_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLinkLight href="#">Accessories</SubNavLinkLight>
          <SmallImg src="https://www.apple.com/v/ipad/home/at/images/chapternav/ipad_acc_light__ebtftz3r2rwy_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLinkLight href="#">iPadOS</SubNavLinkLight>
          <SmallImg src="https://www.apple.com/v/ipad/home/at/images/chapternav/ipados_light__f5xv7yr98tm6_large.svg" />
        </IconContainer>
      </NavLinksContainer>
    </NavContainerLight>
  );
}

export function IPhone() {
  return (
    <BackgroundDiv>
      <NavContainerDark>
        <NavLinksContainer>
          <IconContainer>
            <SubNavLinkDark href="#">iPhone 11 Pro</SubNavLinkDark>
            <SmallImg src="https://www.apple.com/v/iphone/home/ab/images/chapternav/iphone_11_pro_dark__cchxb3bv66vm_large.svg" />
          </IconContainer>
          <IconContainer>
            <SubNavLinkDark href="#">iPhone 11</SubNavLinkDark>
            <SmallImg src="https://www.apple.com/v/iphone/home/ab/images/chapternav/iphone_11_dark__exagpxb8zh4y_large.svg" />
          </IconContainer>
          <IconContainer>
            <SubNavLinkDark href="#">iPhone XR</SubNavLinkDark>
            <SmallImg src="https://www.apple.com/v/iphone/home/ab/images/chapternav/iphone_xr_dark__gmkx1gdvqqum_large.svg" />
          </IconContainer>
          <IconContainer>
            <SubNavLinkDark href="#">iPhone 8</SubNavLinkDark>
            <SmallImg src="https://www.apple.com/v/iphone/home/ab/images/chapternav/iphone_8_dark__d4f1b8j5cwia_large.svg" />
          </IconContainer>
          <IconContainer>
            <SubNavLinkDark href="#">Compare</SubNavLinkDark>
            <SmallImg src="https://www.apple.com/v/iphone/home/ab/images/chapternav/iphone_comp_dark__ganfgd3pa9m6_large.svg" />
          </IconContainer>
          <IconContainer>
            <SubNavLinkDark href="#">Apple Card</SubNavLinkDark>
            <SmallImg src="https://www.apple.com/v/iphone/home/ab/images/chapternav/iphone_apple_card_dark__fsk0oaya7eqi_large.svg" />
          </IconContainer>
          <IconContainer>
            <SubNavLinkDark href="#">Airpods</SubNavLinkDark>
            <SmallImg src="https://www.apple.com/v/iphone/home/ab/images/chapternav/iphone_airpods_dark__b5yw8pv4m4z6_large.svg" />
          </IconContainer>
          <IconContainer>
            <SubNavLinkDark href="#">Accessories</SubNavLinkDark>
            <SmallImg src="https://www.apple.com/v/iphone/home/ab/images/chapternav/iphone_acc_dark__b5fvf10sbhci_large.svg" />
          </IconContainer>
          <IconContainer>
            <SubNavLinkDark href="#">i0S 13</SubNavLinkDark>
            <SmallImg src="https://www.apple.com/v/iphone/home/ab/images/chapternav/iphone_ios_dark__bb9g9sts3q76_large.svg" />
          </IconContainer>
        </NavLinksContainer>
      </NavContainerDark>
    </BackgroundDiv>
  );
}

export function Watch() {
  return (
    <NavContainerLight>
      <NavLinksContainer>
        <IconContainer>
          <SubNavLinkLight href="#">Apple Series 5</SubNavLinkLight>
          <SmallImg src="https://www.apple.com/v/watch/home/r/images/overview/watch_nav_series_2__bk595ih4bliu_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLinkLight href="#">Apple Nike</SubNavLinkLight>
          <SmallImg src="https://www.apple.com/v/watch/home/r/images/overview/watch_nav_nike__mkjgkrrlq2ye_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLinkLight href="#">Apple Hermes</SubNavLinkLight>
          <SmallImg src="https://www.apple.com/v/watch/home/r/images/overview/watch_nav_hermes__b1zeoxbn0df6_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLinkLight href="#">Apple Edition</SubNavLinkLight>
          <SmallImg src="https://www.apple.com/v/watch/home/r/images/overview/watch_nav_series_2__bk595ih4bliu_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLinkLight href="#">Apple Series 3</SubNavLinkLight>
          <SmallImg src="https://www.apple.com/v/watch/home/r/images/overview/watch_nav_edition__botzv6l1ftua_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLinkLight href="#">Compare</SubNavLinkLight>
          <SmallImg src="https://www.apple.com/v/watch/home/r/images/overview/watch_nav_compare__bjddtmfseahe_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLinkLight href="#">Bands</SubNavLinkLight>
          <SmallImg src="https://www.apple.com/v/watch/home/r/images/overview/watch_nav_bands__f5qi8icu6suq_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLinkLight href="#">Airpods</SubNavLinkLight>
          <SmallImg src="https://www.apple.com/v/watch/home/r/images/overview/watch_nav_airpods__gdoguo6cstua_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLinkLight href="#">Accessories</SubNavLinkLight>
          <SmallImg src="https://www.apple.com/v/watch/home/r/images/overview/watch_nav_accessories__fix8lwwxvtu2_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLinkLight href="#">watchOS</SubNavLinkLight>
          <SmallImg src="https://www.apple.com/v/watch/home/r/images/overview/watch_nav_watch_os__fctkp231ik6e_large.svg" />
        </IconContainer>
      </NavLinksContainer>
    </NavContainerLight>
  );
}

export function Television() {
  return (
    <BackgroundDiv>
      <NavContainerDark>
        <NavLinksContainer>
          <IconContainer>
            <SubNavLinkDark href="#">Apple TV app</SubNavLinkDark>
            <SmallImg src="https://www.apple.com/v/tv/home/h/images/home/apple_tv_app_dark__blle10nnpq3m_large.svg" />
          </IconContainer>
          <IconContainer>
            <SubNavLinkDark href="#">Apple TV+</SubNavLinkDark>
            <SmallImg src="https://www.apple.com/v/tv/home/h/images/home/apple_tv_plus_dark__fntbqaxjuouy_large.svg" />
          </IconContainer>
          <IconContainer>
            <SubNavLinkDark href="#">Apple TV 4K</SubNavLinkDark>
            <SmallImg src="https://www.apple.com/v/tv/home/h/images/home/apple_tv_dark__ern1bz8tkwqe_large.svg" />
          </IconContainer>
          <IconContainer>
            <SubNavLinkDark href="#">Apple TV HD</SubNavLinkDark>
            <SmallImg src="https://www.apple.com/v/tv/home/h/images/home/apple_tv_dark__ern1bz8tkwqe_large.svg" />
          </IconContainer>
          <IconContainer>
            <SubNavLinkDark href="#">Airplay</SubNavLinkDark>
            <SmallImg src="https://www.apple.com/v/tv/home/h/images/home/airplay_dark__dqiw3rzeujma_large.svg" />
          </IconContainer>
          <IconContainer>
            <SubNavLinkDark href="#">Accessories</SubNavLinkDark>
            <SmallImg src="https://www.apple.com/v/tv/home/h/images/home/accessories_dark__dybfk40y28om_large.svg" />
          </IconContainer>
        </NavLinksContainer>
      </NavContainerDark>
    </BackgroundDiv>
  );
}

export function Music() {
  return (
    <NavContainerLight>
      <NavLinksContainer>
        <IconContainer>
          <SubNavLinkLight href="#">Apple Music</SubNavLinkLight>
          <SmallImg src="https://www.apple.com/v/music/i/images/overview/icons/apple_music_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLinkLight href="#">HomePod</SubNavLinkLight>
          <SmallImg src="https://www.apple.com/v/music/i/images/overview/icons/homepod_icon_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLinkLight href="#">AirPods</SubNavLinkLight>
          <SmallImg src="https://www.apple.com/v/music/i/images/overview/icons/airpods_icon_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLinkLight href="#">iPod Touch</SubNavLinkLight>
          <SmallImg src="https://www.apple.com/v/music/i/images/overview/icons/ipod_touch_light_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLinkLight href="#">Music Accessories</SubNavLinkLight>
          <SmallImg src="https://www.apple.com/v/music/i/images/overview/icons/accessories_large.svg" />
        </IconContainer>
        <IconContainer>
          <SubNavLinkLight href="#">Gift Cards</SubNavLinkLight>
          <SmallImg src="https://www.apple.com/v/music/i/images/overview/icons/gift_cards_large.svg" />
        </IconContainer>
      </NavLinksContainer>
    </NavContainerLight>
  );
}

export function Support() {
  return <div></div>;
}

export function Search() {
  return <div></div>;
}

export function Cart() {
  return <div></div>;
}
