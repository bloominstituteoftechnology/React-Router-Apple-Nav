import React from "react";

const links = [
  {
    name: "Mac",
    image: "apple.svg",
    subNav: [
      { name: "MacBook", image: "images/mac/macbook_dark_large.svg" },
      { name: "MacBook Air", image: "images/mac/macbookair_dark_large.svg" },
      { name: "MacBook Pro", image: "images/mac/macbookpro_dark_large.svg" },
      { name: "iMac", image: "images/mac/imac_dark_large.svg" },
      { name: "iMac Pro", image: "images/mac/imac_pro_dark_large.svg" },
      { name: "Mac Pro", image: "images/mac/macpro_dark_large.svg" },
      { name: "Mac mini", image: "images/mac/macmini_dark_large.svg" },
      { name: "Accessories", image: "images/mac/mac_acc_dark_large.svg" },
      { name: "High Sierra", image: "images/mac/mac_osx_dark_large.svg" },
      { name: "Compare", image: "images/mac/mac_comp_dark_large.svg" }
    ]
  },
  {
    name: "iPad",
    image: "apple.svg",
    subNav: [
      { name: "iPad Pro", image: "images/ipad/ipadpro_light_large.svg" },
      { name: "iPad", image: "images/ipad/ipad_large.svg" },
      { name: "iPad mini 4", image: "images/ipad/ipadmini_large.svg" },
      { name: "iOS 11", image: "images/ipad/ipad_ios10_large.svg" },
      { name: "Accessories", image: "images/ipad/ipad_acc_large.svg" },
      { name: "Compare", image: "images/ipad/ipad_comp_large.svg" }
    ]
  },
  {
    name: "iPhone",
    image: "apple.svg",
    subNav: [
      { name: "MacBook", image: "images/mac/macbook_dark_large.svg" },
      { name: "MacBook Air", image: "images/mac/macbookair_dark_large.svg" },
      { name: "MacBook Pro", image: "images/mac/macbookpro_dark_large.svg" },
      { name: "iMac", image: "images/mac/imac_dark_large.svg" },
      { name: "iMac Pro", image: "images/mac/imac_pro_dark_large.svg" },
      { name: "Mac Pro", image: "images/mac/macpro_dark_large.svg" },
      { name: "Mac mini", image: "images/mac/macmini_dark_large.svg" },
      { name: "Accessories", image: "images/mac/mac_acc_dark_large.svg" },
      { name: "High Sierra", image: "images/mac/mac_osx_dark_large.svg" },
      { name: "Compare", image: "images/mac/mac_comp_dark_large.svg" }
    ]
  },
  {
    name: "Watch",
    image: "apple.svg",
    subNav: [
      { name: "MacBook", image: "images/mac/macbook_dark_large.svg" },
      { name: "MacBook Air", image: "images/mac/macbookair_dark_large.svg" },
      { name: "MacBook Pro", image: "images/mac/macbookpro_dark_large.svg" },
      { name: "iMac", image: "images/mac/imac_dark_large.svg" },
      { name: "iMac Pro", image: "images/mac/imac_pro_dark_large.svg" },
      { name: "Mac Pro", image: "images/mac/macpro_dark_large.svg" },
      { name: "Mac mini", image: "images/mac/macmini_dark_large.svg" },
      { name: "Accessories", image: "images/mac/mac_acc_dark_large.svg" },
      { name: "High Sierra", image: "images/mac/mac_osx_dark_large.svg" },
      { name: "Compare", image: "images/mac/mac_comp_dark_large.svg" }
    ]
  },
  {
    name: "TV",
    image: "apple.svg",
    subNav: [
      { name: "MacBook", image: "images/mac/macbook_dark_large.svg" },
      { name: "MacBook Air", image: "images/mac/macbookair_dark_large.svg" },
      { name: "MacBook Pro", image: "images/mac/macbookpro_dark_large.svg" },
      { name: "iMac", image: "images/mac/imac_dark_large.svg" },
      { name: "iMac Pro", image: "images/mac/imac_pro_dark_large.svg" },
      { name: "Mac Pro", image: "images/mac/macpro_dark_large.svg" },
      { name: "Mac mini", image: "images/mac/macmini_dark_large.svg" },
      { name: "Accessories", image: "images/mac/mac_acc_dark_large.svg" },
      { name: "High Sierra", image: "images/mac/mac_osx_dark_large.svg" },
      { name: "Compare", image: "images/mac/mac_comp_dark_large.svg" }
    ]
  },
  {
    name: "Music",
    image: "apple.svg",
    subNav: [
      { name: "MacBook", image: "images/mac/macbook_dark_large.svg" },
      { name: "MacBook Air", image: "images/mac/macbookair_dark_large.svg" },
      { name: "MacBook Pro", image: "images/mac/macbookpro_dark_large.svg" },
      { name: "iMac", image: "images/mac/imac_dark_large.svg" },
      { name: "iMac Pro", image: "images/mac/imac_pro_dark_large.svg" },
      { name: "Mac Pro", image: "images/mac/macpro_dark_large.svg" },
      { name: "Mac mini", image: "images/mac/macmini_dark_large.svg" },
      { name: "Accessories", image: "images/mac/mac_acc_dark_large.svg" },
      { name: "High Sierra", image: "images/mac/mac_osx_dark_large.svg" },
      { name: "Compare", image: "images/mac/mac_comp_dark_large.svg" }
    ]
  }
];

const SubNav = props => {
  // reference the upperLink
  const upperLink = links.find(link => link.name === props.match.params.name);

  return (
    <div class="subnav-wrapper-wrapper">
      <div class="subnav-wrapper">
        {upperLink.subNav.map(item => (
          <div className="image-name-wrapper" key={Math.random()}>
            <img src={item.image} alt="apple product" />
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubNav;
