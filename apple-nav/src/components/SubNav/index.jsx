import React from 'react';
import PropTypes from 'prop-tyles';

const links = [
  {
    name: "Mac",
    image: "apple.svg"
  },
  {
    name: "iPod",
    image: "apple.svg"
  },
  {
    name: "iPhone",
    image: "apple.svg"
  },
  {
    name: "Watch",
    image: "apple.svg"
  },
  {
    name: "TV",
    image: "apple.svg"
  },
  {
    name: "Music",
    image: "apple.svg"
  }
]

const SubNav = props => {
  // reference the upperLink
  const upperLink = links.find(link => link.name === props.match.params.name);

  return (
    <div class="subnav-wrapper-wrapper">
      <div class="subnav-wrapper">
        {upperLink.subNav.map(item => (
          <div className="image-name-wrapper" key={Math.random()}>
            <img src={item.image} alt="apple product"/>
            <div>{item.name}</div>
          </div>
        ))}
    </div>
    </div>
  );
};

SubNav.propTypes = {
  link: PropTypes.shape({
    name: string,
    image: string
  })
};

export default SubNav;